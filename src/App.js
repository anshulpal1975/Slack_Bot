import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState([]);
  const chatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3000/slack/events', { command: '/slackbot', text: input });
      setResponse([...response, { text: input, type: 'user' }, { text: result.data.text, type: 'bot' }]);
      setInput('');
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="chatbox" style={{ backgroundColor: '#62CCA2', padding: '1rem' }}>
        <Typography variant="h5" align="center" gutterBottom >
          Slack Bot Chat
        </Typography>
        <div className="chat-history" ref={chatRef}>
          {response.map((message, index) => (
            <div
              key={index}
              className={`message ${message.type === 'user' ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SendOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Paper>
    </Container>
  );
}

export default App;
