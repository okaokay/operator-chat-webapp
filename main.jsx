import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const API_URL = 'https://palegreen-mongoose-333530.hostingersite.com/wp-json/operator-chat/v1/messages';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <div>
      <h1>Messaggi dal Chatbot</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>
            <b>{msg.username}</b>: {msg.message} <i>{msg.time}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
