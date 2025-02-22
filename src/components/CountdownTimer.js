import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="col-md-4">
      <div className="card text-center shadow-lg p-3 bg-light">
        <div className="card-header bg-primary text-white">
          <h5>Time Remaining</h5>
        </div>
        <div className="card-body">
          <h4 className="fw-bold">{formatTime(timeLeft)}</h4>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
