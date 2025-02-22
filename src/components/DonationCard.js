import { useState } from "react";

// Circular Progress Component
const CircularProgress = ({ progress, image }) => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center mt-3" style={{ width: "200px", height: "200px", margin: "auto" }}>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="90" stroke="#e0e0e0" strokeWidth="10" fill="none" />
        <circle
          cx="100" cy="100" r="90"
          stroke="#03A29A" strokeWidth="20" fill="none"
          strokeDasharray="565.48"
          strokeDashoffset={565.48 - (progress * 5.6548)}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
      </svg>
      <img
        src={image}
        alt="Milestone"
        className="rounded-circle position-absolute"
        style={{ width: "180px", height: "180px", objectFit: "cover", border: "4px solid white" }}
      />
    </div>
  );
};

// Single Donation Card Component
const DonationCard = ({ title, goal, milestones }) => {
  const [donation, setDonation] = useState(0);
  const progress = (donation / goal) * 100;
  const currentMilestone = milestones.filter(m => donation >= m.amount).pop();

  const donate = (amount) => {
    setDonation(prev => Math.min(prev + amount, goal));
  };

  return (
    <div className="card p-3 text-center shadow-lg">
      <h4 className="fw-bold">{title}</h4>
      <p className="text-muted">Goal: ₹{goal.toLocaleString()}</p>

      <CircularProgress progress={progress} image={currentMilestone.image} />

      <p className="fw-semibold mt-3">{currentMilestone.title}</p>
      <p className="fw-semibold">Raised: ₹{donation.toLocaleString()} / ₹{goal.toLocaleString()}</p>

      <button className="btn" onClick={() => donate(5000)} disabled={donation >= goal} style={{backgroundColor:"#03A29A", color:"white"}}>
        {donation >= goal ? "Goal Achieved 🎉" : "Donate ₹5000"}
      </button>
    </div>
  );
};

// Main Component - Displays Multiple Cards
const DonationSection = () => {
  const goal = 50000;
  const milestones = [
    { amount: 0, title: "Help a Child Begin Education", image: "https://plus.unsplash.com/premium_photo-1682089897177-4dbc85aa672f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { amount: 10000, title: "Provides Food", image: "https://plus.unsplash.com/premium_photo-1682089856632-bb507e1884f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { amount: 20000, title: "Provides Clothes", image: "https://media.istockphoto.com/id/2198646679/photo/indian-female-college-student-with-books-showing-thumbs-up-and-smiling-to-the-camera.jpg?s=2048x2048&w=is&k=20&c=ePdua0bWpLa-TkTbX5D853SS6lKIgq0hGv7xjWEyGSY=" },
    { amount: 30000, title: "Provides Blankets", image: "https://media.istockphoto.com/id/1294541019/photo/mother-and-daughther-happy-together-stock-photo.jpg?s=2048x2048&w=is&k=20&c=fLSyXBCrl0qKYWkQqJsoH-zRCnykzQ9rRdgM2FlFpY8=" },
    { amount: 40000, title: "Provides Sanitary Pads", image: "https://media.istockphoto.com/id/1345447268/photo/teenage-lady-girl-holding-a-sanitary-napkin-in-hand-painful-menstruation-or-abdominal-cramps.jpg?s=2048x2048&w=is&k=20&c=0Bl3HFUA5Ddh4fYu4c4nqwfQyrFy4Ha8xU4ebWXWlOk=" },
    { amount: 50000, title: "Provides Books & Education", image: "https://media.istockphoto.com/id/1205256215/photo/school-children-at-campus.jpg?s=2048x2048&w=is&k=20&c=kuRAR_gN_grZ3wh8ToDZ3wJmQZKSKHma3BMUxLSenXo=" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Donation Campaigns</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <DonationCard title="Education for Children" goal={goal} milestones={milestones} />
        </div>
        <div className="col-md-4 mb-4">
          <DonationCard title="Food for Needy" goal={goal} milestones={milestones} />
        </div>
        <div className="col-md-4 mb-4">
          <DonationCard title="Winter Essentials" goal={goal} milestones={milestones} />
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
