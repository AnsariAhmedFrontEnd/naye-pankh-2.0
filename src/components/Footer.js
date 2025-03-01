import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="py-4" style={{ backgroundColor: "#004085", color: "#F8F4E1" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">About Us</h5>
              <p>
                Making the world a better place by spreading kindness and generosity. 
                Join us in our mission to bring hope to every heart.
              </p>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/" className="footer-link">About</Link></li>
                <li><Link to="/" className="footer-link">Donate</Link></li>
                <li><Link to="/" className="footer-link">Contact</Link></li>
              </ul>
            </div>
  
            <div className="col-md-4">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-center">
                <Link to="/" className="social-icon"><i className="fab fa-facebook"></i></Link>
                <Link to="/" className="social-icon"><i className="fab fa-twitter"></i></Link>
                <Link to="/" className="social-icon"><i className="fab fa-instagram"></i></Link>
                <Link to="/" className="social-icon"><i className="fab fa-linkedin"></i></Link>
              </div>
            </div>
          </div>
  
          <hr style={{ borderColor: "rgba(255, 255, 255, 0.3)" }} />
  
          <p className="mb-0">© 2025 All Rights Reserved | Designed with ❤️</p>
        </div>
  
        {/* Custom CSS */}
        <style jsx>{`
          .footer-link {
            color: #F8F4E1;
            text-decoration: none;
            transition: color 0.3s ease-in-out, transform 0.2s;
          }
          .footer-link:hover {
            color: #28A745;
            transform: scale(1.05);
          }
          .social-icon {
            color: #F8F4E1;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: color 0.3s ease-in-out, transform 0.2s;
          }
          .social-icon:hover {
            color: #28A745;
            transform: scale(1.1);
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;
  