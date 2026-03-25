import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function Dashboard() {

  const [transactions,setTransactions] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:4040/transactions")
    .then(res=>{
      setTransactions(res.data);
    });

  },[]);

  const fraudCount = transactions.filter(t => t.isFraud === true).length;
  const normalCount = transactions.length - fraudCount;

  const data = [
    {name:"Fraud", value:fraudCount},
    {name:"Normal", value:normalCount}
  ];

  return (
  <div className="dashboard-container">

    <h1>Fraud Detection Dashboard</h1>

    {/* 🔥 CARDS */}
    <div className="cards">
      <div className="card">
        <h3>Total</h3>
        <p>{transactions.length}</p>
      </div>

      <div className="card fraud">
        <h3>Fraud</h3>
        <p>{fraudCount}</p>
      </div>

      <div className="card safe">
        <h3>Safe</h3>
        <p>{normalCount}</p>
      </div>
    </div>

    {/* 🔥 CHART CENTER */}
    <div className="chart-container">
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" outerRadius={150}>
          <Cell fill="#ef4444" />
          <Cell fill="#22c55e" />
        </Pie>
        <Legend />
      </PieChart>
    </div>

    {/* 🔥 RECENT TRANSACTIONS */}
    <div className="recent-container">
      <h2>Recent Transactions</h2>
      <div className="recent-list">
        {transactions.slice(-5).reverse().map((t, i) => (
          <div key={i} className="recent-item">
            <span>${t.amount} - {t.category}</span>
            <span style={{ color: t.isFraud ? '#ef4444' : '#22c55e' }}>
              {t.isFraud ? '🚨 Fraud' : '✅ Safe'}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
);
}