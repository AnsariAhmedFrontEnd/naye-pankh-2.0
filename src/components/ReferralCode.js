import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ReferralCode = ({ referralCode, referrals = 0, nextReward = 5 }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralProgress = Math.min((referrals / nextReward) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-lg-6 col-md-8 mx-auto"
    >
      <div className="card text-center shadow-lg rounded-lg border-0">
        {/* Banner Image */}
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Referral Banner"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        

        {/* Card Body */}
        <div className="card-body">
          {/* Referral Code Display */}
          <h5 className="fw-semibold text-dark">Your Referral Code:</h5>
          <div className="d-flex justify-content-center align-items-center">
            <h4 className="fw-bold bg-light text-primary px-3 py-2 rounded border">
              {referralCode}
            </h4>
            <button
              className="btn btn-outline-success ms-2"
              onClick={copyToClipboard}
            >
              📋 {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Referral Notes */}
          <p className="text-muted small mt-3">
            Share this code with friends. When they sign up, you earn rewards!
          </p>

          {/* Reward Progress Bar */}
          <div className="mt-3">
            <h6 className="text-success fw-bold">🔥 {nextReward - referrals} more referrals to unlock next reward!</h6>
            <div className="progress" style={{ height: "10px" }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${referralProgress}%` }}
                transition={{ duration: 1 }}
                className="progress-bar bg-warning"
                role="progressbar"
              ></motion.div>
            </div>
          </div>

          {/* Referral Benefits */}
          <div className="mt-4 p-3 bg-light rounded border">
            <h6 className="fw-bold text-success">🎉 Why Refer?</h6>
            <ul className="text-muted small text-start">
              <li>🎁 Earn exclusive rewards with every referral.</li>
              <li>💰 Get discounts, bonus XP, and free gifts.</li>
              <li>🚀 Help your friends join and enjoy benefits too!</li>
            </ul>
          </div>

          {/* Social Sharing Section */}
          <div className="mt-4">
            <h6 className="fw-bold">📢 Share Your Code</h6>
            <div className="d-flex justify-content-center">
              <Link to="#" className="btn btn-info btn-sm mx-1">🐦 Twitter</Link>
              <Link to="#" className="btn btn-primary btn-sm mx-1">🔵 Facebook</Link>
              <Link to="#" className="btn btn-success btn-sm mx-1">📤 WhatsApp</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralCode;
