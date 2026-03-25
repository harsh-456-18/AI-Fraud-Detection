import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="nav-left">
        <h2 className="logo">⚡ FraudAI</h2>
      </div>

      {/* CENTER - LINKS */}
      <div className="nav-center">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          ➕ Add
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          📋 History
        </NavLink>
      </div>

      {/* RIGHT - PROFILE + LOGOUT */}
      <div className="nav-right">
        <NavLink to="/profile" className={({ isActive }) => isActive ? "profile active" : "profile"}>
          👤 Profile
        </NavLink>
        <button onClick={logout}>🚪 Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;