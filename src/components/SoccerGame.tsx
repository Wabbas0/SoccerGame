import React, { useState, useEffect } from 'react';
import Ticker from './Ticker'; // Import the Ticker component
import VideoPlayer from './VideoPlayer'; // Import the VideoPlayer component
import Notification from './Notification'; // Import your Notification component


const SoccerGame = () => {
  // Define your notification and ticker data (replace with your actual data)
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'Goal! Buddy Cullen scores.' },
    { id: '2', message: 'Red card for Roydon Vernon.' },
    { id: '3', message: 'Goal! Buddy Cullen scores again.' },
    { id: '4', message: 'Yellow card for Oswald Patton.' },
    { id: '5', message: 'Goal! Dallas Patrick scores.' },
    { id: '6', message: 'End of the first half.' },
    { id: '7', message: 'End of the game.' },
  ]);

  const [tickerItems, setTickerItems] = useState([
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Etiam eu ex convallis, finibus purus id, suscipit',
  ]);

  useEffect(() => {
    // Simulate adding a new notification after 10 seconds (for testing)
    const timeout = setTimeout(() => {
      setNotifications([
        ...notifications,
        { id: '8', message: 'New notification added.' },
      ]);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [notifications]);

  return (
    <div className="app">
      <div className="notifications">
        {notifications.map((notification) => (
          <Notification key={notification.id} message={notification.message} />
        ))}
      </div>
      <Ticker tickerItems={tickerItems} />
      <VideoPlayer />
    </div>
  );
};

export default SoccerGame;
