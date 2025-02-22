import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="primary">
      <div className="container-fluid mx-5 d-flex justify-content-between align-items-center">

        <Link to="/" className="navbar-brand">
          <img src="/assets/logo.png" alt="logo" style={{ width: "60px", height: "auto" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">Transactions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">Learning Modules</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
