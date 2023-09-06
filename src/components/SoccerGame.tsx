import React, { useEffect, useState } from 'react';
// import VideoPlayer from './VideoPlayer';
// import Notification from './Notification';
// import Ticker from './Ticker';

const SoccerGame: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.github.com/jbreemhaar/449a78e2395cdc85837110447b77317d');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="soccer-game">
      <h1>Soccer Game</h1>
    </div>
  );
};

export default SoccerGame;
