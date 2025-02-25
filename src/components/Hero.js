import "./Hero.css"
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center" style={{ height: "500px" }}>

        

        <div className="col-md-6 d-flex flex-column justify-content-center text-white text-start px-5 bg-dark h-100">
          <h1 className="fw-bold display-5">
            It's that easy to bring a Smile on Their Faces
          </h1>
          <p className="lead mt-3">
            We don't ask for much, just help us with what you can—Be it Money, Skill, or Your Time.
          </p>
        </div>
        <div className="col-md-6 p-0">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg"
            alt="Hero Background"
            className="img-fluid w-100"
            style={{ height: "500px", objectFit: "cover", opacity: "0.9" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
