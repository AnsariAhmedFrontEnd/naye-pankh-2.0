const ImpactSection = () => {
    return (
      <div className="row align-items-center p-5" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="col-md-4">
          <h2 className="fw-bold" style={{ color: "#004085" }}>Together, We Can Make a Difference</h2>
          <p className="mt-3" style={{ color: "#212529", fontSize: "18px", lineHeight: "1.6" }}>
            Your kindness is a lifeline for those in need. Every small act of giving creates a ripple effect of change. 
            A child’s smile, a family’s relief, and a brighter future begin with your support. Whether it’s providing 
            education, food, or warmth, your generosity turns hardships into hope. 
          </p>
          <p className="fw-semibold" style={{ color: "#155724" }}>
            When you contribute, you’re not just donating—you’re empowering lives and building a future where no one is left behind. 
            Join us in this mission and be the reason someone believes in a better tomorrow.
          </p>
        </div>
        <div className="col-md-8 text-center">
          <img
            src="https://img.freepik.com/free-photo/girl-park_1157-5348.jpg?t=st=1740806601~exp=1740810201~hmac=ebdb0974682324645db831143bfa1f53c7a13ce07bfd080a89e8a286173695f6&w=1060"
            alt="Child in the park"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "60%", height: "auto", borderRadius: "12px" }}
          />
        </div>
      </div>
    );
  };
  
  export default ImpactSection;
  