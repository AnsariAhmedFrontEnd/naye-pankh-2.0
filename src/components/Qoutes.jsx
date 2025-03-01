const DonationQuotes = () => {
    const quotes = [
      {
        text: "No one has ever become poor by giving.",
        author: "Anne Frank",
      },
      {
        text: "It is not how much we give, but how much love we put into giving.",
        author: "Mother Teresa",
      },
      {
        text: "Happiness doesn’t result from what we get, but from what we give.",
        author: "Ben Carson",
      },
    ];
  
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ color: "#004085" }}>
          Inspiring Words on Giving
        </h2>
        <div className="row">
          {quotes.map((quote, index) => (
            <div key={index} className="col-md-4">
              <div
                className="p-4 text-center shadow rounded"
                style={{ borderLeft: "5px solid #004085" }}
              >
                <p className="fw-bold mb-3" style={{ color: "#004085", fontSize: "1.2rem" }}>
                  "{quote.text}"
                </p>
                <p className="fw-semibold" style={{ color: "#4D455D" }}>- {quote.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DonationQuotes;
  