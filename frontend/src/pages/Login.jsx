import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import API from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", form);
      if (res.data === "Login success") {
        localStorage.setItem("token", "loggedin");
        localStorage.setItem("user", form.email);
        navigate("/dashboard");
      } else {
        alert(res.data);
      }
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-intro">
          <h1>Protect Your Transactions with FraudAI</h1>
          <p>
            Instant fraud detection powered by machine learning. Monitor patterns,
            score risk, and stop suspicious activity before it impacts your business.
          </p>

          <div className="feature-list">
            <div className="feature">✔️ Real-time anomaly detection</div>
            <div className="feature">✔️ AI fraud scoring with alerts</div>
            <div className="feature">✔️ Secure history and analytics</div>
            <div className="feature">✔️ Adaptive model learning</div>
          </div>

          <div className="mini-stats">
            <div>
              <strong>99.3%</strong>
              <span>Detection Accuracy</span>
            </div>
            <div>
              <strong>0.02%</strong>
              <span>False Positive Rate</span>
            </div>
            <div>
              <strong>100ms</strong>
              <span>Latency Per Check</span>
            </div>
          </div>
        </div>

        <div className="login-form-wrapper">
          <h2>Login</h2>
          <p>Access your dashboard and manage fraud tracking.</p>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button onClick={handleLogin}>Log In</button>

          <p className="signup-link">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;