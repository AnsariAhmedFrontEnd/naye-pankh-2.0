const Hero = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <img 
            src="/assets/Hero.avif" 
            alt="Hero" 
            className="img-fluid w-100" 
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  