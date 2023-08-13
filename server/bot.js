const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getWeather } = require('./weather'); // Import the getWeather function
const { getJokes } = require('./jokes');
const { commands } = require('./commands');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/slack/events', async (req, res) => {
  const { command, text } = req.body;
  if (command === '/slackbot') {
    if (text.startsWith('/mybot')) {
      const [_, subCommand, ...params] = text.split(' ');
      if (subCommand === 'weather') {
        const location = params.join(' ');
        const weatherText = await getWeather(location); // Use the getWeather function
        res.json({ text: weatherText });
      } else if (subCommand === 'joke') {
        const jokeText = await getJokes(); // Use the getJokes function
        res.json({ text: jokeText });
      } else if (subCommand === 'help') {
        res.json({ text: commands.help });
      } else if (subCommand === 'time') {
        res.json({ text: commands.time });
      } else if (subCommand === 'konami') {
        res.json({ text: commands.konami });
      } else if (subCommand === 'hello') {
        res.json({ text: commands.hello });
      } else {
        res.json({ text: 'Invalid sub-command. Type `/mybot help` for available commands.' });
      }
    } else {
      const response = commands[text] || 'Invalid command. Type `/mybot help` for available commands.';
      res.json({ text: response });
    } 
  } else {
    res.status(404).json({ text: 'Command not recognized' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
