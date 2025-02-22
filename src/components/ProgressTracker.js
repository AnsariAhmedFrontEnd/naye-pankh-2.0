import { useState } from "react";

const ProgressTracker = () => {
  const [xp, setXp] = useState(50);
  const xpPerLevel = 100;
  const level = Math.floor(xp / xpPerLevel);
  const progress = ((xp % xpPerLevel) / xpPerLevel) * 100;

  const badges = [
    { level: 1, name: "Beginner", class: "secondary" },
    { level: 3, name: "Explorer", class: "primary" },
    { level: 5, name: "Achiever", class: "success" },
    { level: 10, name: "Master", class: "warning" },
  ];

  const currentBadge = badges.find((b) => level >= b.level) || badges[0];

  const gainXp = () => {
    setXp((prevXp) => prevXp + Math.floor(Math.random() * 20) + 10);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card text-center shadow-lg p-3 bg-light" style={{ maxWidth: "400px" }}>
        <div className="card-header bg-dark text-white">
          <h5>Level {level}</h5>
          <span className={`badge bg-${currentBadge.class} p-2`}>{currentBadge.name}</span>
        </div>
        <div className="card-body">
          <div className="progress mb-3" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${progress}%` }}
            >
              {Math.round(progress)}%
            </div>
          </div>
          <p>Donation Collected: {xp} / {xpPerLevel * (level + 1)}</p>
          <button className="btn btn-warning" onClick={gainXp}>
            Raise More Funds 🎯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
