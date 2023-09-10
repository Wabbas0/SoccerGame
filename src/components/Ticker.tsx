import React, { useState, useEffect } from 'react';
import '../styles/ticker.css'; // Import the ticker styles

const Ticker = ({ tickerItems }) => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      // Increment the ticker index
      setTickerIndex((prevIndex) => (prevIndex + 1) % tickerItems.length);
    }, 3000); // Adjust the interval duration as needed

    return () => {
      clearInterval(tickerInterval); // Clean up the interval on component unmount
    };
  }, [tickerItems]);

  return (
    <div className="ticker-container">
      <div className="ticker">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className={`ticker-item ${index === tickerIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
