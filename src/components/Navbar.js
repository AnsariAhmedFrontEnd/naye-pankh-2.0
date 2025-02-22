import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning shadow-lg" data-bs-theme="dark">
      <div className="container-fluid px-5 d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: "60px", height: "auto", marginRight: "10px" }}
          />
          <span className="fw-bold text-dark">Naye Pankh Foundation</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold px-3" to="/">🏠 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold px-3" to="/transactions">💰 Transactions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold px-3" to="/story">📖 Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold px-3" to="/faq">❓ FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold px-3" to="/learning">📚 Learning Modules</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
