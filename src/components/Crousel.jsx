const ImageGrid = () => {
    const images = [
      {
        src: "https://plus.unsplash.com/premium_photo-1723921211447-be941c04b756?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Happy Indian family celebrating together",
        caption: "Spreading Smiles, One Step at a Time",
      },
      {
        src: "https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Indian children laughing and enjoying",
        caption: "Every Child Deserves Happiness",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1682089792384-a73f54b564a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Indian elders sharing joy",
        caption: "Bringing Hope to Every Generation",
      },
    ];
  
    return (
      <div className="container py-5">
        <div className="row g-4">
          {images.map((image, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card border-0 shadow-lg"
                style={{ backgroundColor: "#004085", borderRadius: "12px" }} // Light Cream Background
              >
                <img
                  src={image.src}
                  className="card-img-top"
                  alt={image.alt}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <div
                  className="card-body text-center"
                  style={{
                    backgroundColor: "#004085", // Deep Blue Background
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <h5 className="fw-bold" style={{ color: "#FFFFFF" }}>
                    {image.caption}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageGrid;
  