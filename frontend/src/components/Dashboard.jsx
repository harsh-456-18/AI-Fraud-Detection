import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="cards">
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Total Transactions</h3>
          <p>120</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Fraud Detected</h3>
          <p>8</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Safe Transactions</h3>
          <p>112</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;