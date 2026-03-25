import { useEffect, useState } from "react";
import API from "../api";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/transactions")
      .then((res) => setData(res.data))
      .catch(() => alert("Error fetching"));
  }, []);

  return (
    <div className="history-container">
      <h2 className="history-title">Transaction History</h2>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Location</th>
            <th>Device</th>
            <th>Time</th>
            <th>Fraud Status</th>
            <th>Probability</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.location}</td>
              <td>{item.deviceType}</td>
              <td>{new Date(item.transactionTime).toLocaleString()}</td>
              <td style={{ color: item.isFraud ? '#ef4444' : '#22c55e' }}>
                {item.isFraud ? '🚨 Fraud' : '✅ Safe'}
              </td>
              <td>{(item.fraudProbability * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;