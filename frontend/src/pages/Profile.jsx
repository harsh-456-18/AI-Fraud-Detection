import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const [stats, setStats] = useState({ total: 0, fraud: 0, safe: 0 });

  useEffect(() => {
    API.get("/transactions")
      .then((res) => {
        const transactions = res.data;
        const total = transactions.length;
        const fraud = transactions.filter(t => t.isFraud).length;
        const safe = total - fraud;
        setStats({ total, fraud, safe });
      })
      .catch(() => {});
  }, []);

  const user = localStorage.getItem("user") || "user@example.com";

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>

      <div className="profile-card">
        <h3>Account Information</h3>
        <p><strong>Email:</strong> {user}</p>
        <p><strong>Role:</strong> Fraud Detection Analyst</p>
      </div>

      <div className="profile-card">
        <h3>Transaction Summary</h3>
        <p><strong>Total Transactions:</strong> {stats.total}</p>
        <p><strong>Fraudulent:</strong> {stats.fraud}</p>
        <p><strong>Safe:</strong> {stats.safe}</p>
      </div>
    </div>
  );
}