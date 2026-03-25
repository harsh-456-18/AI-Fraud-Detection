import { useState } from "react";
import API from "../api";

const AddTransaction = () => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    location: "",
    deviceType: "",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      amount: Number(form.amount),
      category: form.category,
      description: form.description,
      location: form.location,
      deviceType: form.deviceType,
      transactionTime: new Date().toISOString().slice(0, 19), // ✅ FIXED
    };

    console.log("Sending:", payload);

    try {
      const res = await API.post("/transactions", payload);
      console.log(res.data);

      alert("✅ Transaction Added Successfully!");

      // Show fraud detection result
      setResult({
        isFraud: res.data.isFraud,
        probability: res.data.fraudProbability
      });

      // Reset form
      setForm({
        amount: "",
        category: "",
        description: "",
        location: "",
        deviceType: "",
      });

    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
      alert("❌ Error adding transaction");
    }
  };

  return (
    <div className="add-container">

      <h1 className="add-title">⚡ Add Transaction</h1>

      {result && (
        <div className="result-card">
          <h3>Fraud Detection Result</h3>
          <p>Status: {result.isFraud ? "🚨 Fraudulent" : "✅ Legitimate"}</p>
          <p>Probability: {(result.probability * 100).toFixed(2)}%</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-form">

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          placeholder="Device Type"
          value={form.deviceType}
          onChange={(e) => setForm({ ...form, deviceType: e.target.value })}
        />

        <button type="submit">Add</button>

      </form>

    </div>
  );
};

export default AddTransaction;