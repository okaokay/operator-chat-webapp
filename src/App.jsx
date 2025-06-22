import React, { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://palegreen-mongoose-333530.hostingersite.com/wp-json/operator-chat/v1/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Richieste da utenti</h1>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <strong>{msg.name}</strong>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;