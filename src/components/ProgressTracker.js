import FundraisingProgress from "./FundraisingProgress";
// import CountdownTimer from "./CountdownTimer";
import ReferralCode from "./ReferralCode";

const ProgressTracker = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <FundraisingProgress currentFunds={3200} fundraisingGoal={5000} />
        {/* <CountdownTimer targetDate={new Date("2025-12-31T23:59:59").getTime()} /> */}
        <ReferralCode referralCode="REF12345" />
      </div>
    </div>
  );
};

export default ProgressTracker;
