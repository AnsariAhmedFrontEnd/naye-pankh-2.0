import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FundraisingProgress = ({ currentFunds, fundraisingGoal, donors, daysLeft, topDonor }) => {
    const fundsProgress = Math.min((currentFunds / fundraisingGoal) * 100, 100);
    const level = Math.floor(fundsProgress / 20) + 1;
    const xpPoints = Math.round(fundsProgress * 10);
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const [lootBox, setLootBox] = useState(null);

    const badges = ["🥉 Beginner", "🥈 Pro", "🏆 Master", "🔥 Elite", "🚀 Legend"];
    const badge = badges[Math.min(level - 1, badges.length - 1)];

    useEffect(() => {
        setTimeout(() => setAnimatedProgress(fundsProgress), 500);
    }, [fundsProgress]);

    useEffect(() => {
        if (fundsProgress % 20 === 0 && fundsProgress !== 0) {
            triggerLootBox();
        }
    }, [fundsProgress]);

    const triggerLootBox = () => {
        const rewards = ["💎 Extra XP Boost", "🎟️ Double Streak", "🎁 Special Badge", "🔥 Bonus 500 XP"];
        setLootBox(rewards[Math.floor(Math.random() * rewards.length)]);
        setTimeout(() => setLootBox(null), 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-lg-6 col-md-8 mx-auto"
        >
            <div className="card bg-dark text-white shadow-lg rounded overflow-hidden">
                {/* Fundraiser Banner - Online Image */}
                <img
                    src="https://images.unsplash.com/photo-1495653797063-114787b77b23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fundraiser Banner"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                />

                {/* Header Section */}
                <div className="card-header text-center fw-bold text-warning">
                    🎖️ Level {level} - {badge}
                </div>

                {/* Body Section */}
                <div className="card-body text-center">
                    {/* Fundraising Stats */}
                    <h5 className="fw-semibold mb-3">
                        ₹{currentFunds.toLocaleString()} / ₹{fundraisingGoal.toLocaleString()} Raised
                    </h5>

                    <div className="progress mb-3" style={{ height: "20px" }}>
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${animatedProgress}%` }}
                            transition={{ duration: 1.5 }}
                            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                            role="progressbar"
                            aria-valuenow={fundsProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {Math.round(fundsProgress)}%
                        </motion.div>
                    </div>
                    <small className="text-muted">
                        {fundsProgress < 100 ? "Keep going! You're making progress. 🚀" : "Goal achieved! 🎉"}
                    </small>

                    {/* XP Progress */}
                    <div className="mt-3">
                        <h6 className="text-warning fw-bold">🌟 XP: {xpPoints} / 1000</h6>
                        <div className="progress" style={{ height: "10px" }}>
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${(xpPoints % 1000) / 10}%` }}
                                transition={{ duration: 1 }}
                                className="progress-bar bg-success"
                                role="progressbar"
                            ></motion.div>
                        </div>
                    </div>

                    {/* Fundraising Details Section */}
                    <div className="mt-4 p-3 bg-secondary text-white rounded">
                        <h6 className="fw-bold">📢 Campaign Stats</h6>
                        <div className="row">
                            <div className="col-4">
                                <h6>🧑‍🤝‍🧑 Donors</h6>
                                <p className="fw-bold">{donors}</p>
                            </div>
                            <div className="col-4">
                                <h6>📅 Days Left</h6>
                                <p className="fw-bold">{daysLeft}</p>
                            </div>
                            <div className="col-4">
                                <h6>💎 Top Donor</h6>
                                <p className="fw-bold">{topDonor}</p>
                            </div>
                        </div>
                    </div>

                    {/* Loot Box Reward System */}
                    {lootBox && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 p-2 bg-success text-white fw-bold rounded"
                        >
                            🎁 LOOT BOX UNLOCKED: {lootBox}
                        </motion.div>
                    )}

                    {/* Next Reward Section */}
                    <div className="mt-4">
                        <h6 className="text-warning fw-bold">🎯 Next Reward at: {Math.ceil((fundsProgress + 10) / 10) * 10}%</h6>
                        <p className="text-muted small">Unlock new perks by contributing more!</p>
                    </div>

                    {/* Social Sharing */}
                    <div className="mt-4">
                        <h6 className="fw-bold">📣 Spread the Word</h6>
                        <div className="d-flex justify-content-center">
                            <Link to="#" className="btn btn-success btn-sm mx-1">📤 WhatsApp</Link>
                            <Link to="#" className="btn btn-info btn-sm mx-1">🐦 Twitter</Link>
                            <Link to="#" className="btn btn-primary btn-sm mx-1">🔵 Facebook</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FundraisingProgress;
