import React, { useEffect, useState } from 'react';

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to EDM Shuffle</h1>
      <div className="events-section">
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;