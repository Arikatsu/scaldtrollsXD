const { Client, Intents } = require('discord.js-selfbot');
const client = new Client({intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
]});
const express = require('express')
const app = express();
const port = 3000;
const config = require("./config.json");
const db = require('quick.db');

app.get('/', (req, res) => res.send('bot online'));

app.listen(port, () => console.log(`Your app is listening a http://localhost:${port}`));
 
client.on('ready', () => {
  let handler = require('./commandHandler')
  if (handler.default) handler = handler.default

  handler(client)
  
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.login(config.TOKEN);