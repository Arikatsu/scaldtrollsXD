const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});
const express = require('express')
const app = express();
const port = 3000;
const config = require("./config.json");
const chaos = require('./db/chaos.json')

app.get('/', (req, res) => res.send('bot online'));

app.listen(port, () => console.log(`Your app is listening at http://localhost:${port}`));

client.on('ready', () => {
  let handler = require('./commandHandler')
  if (handler.default) handler = handler.default

  handler(client)

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith(config.prefix + config.prefix)) {
    const args = message.content.slice(2).split(/ +/)
    if (!chaos[args[0]])
      return 
    else
      return message.channel.send({ content: chaos[args[0]] })
  }
  else if (message.content.endsWith(config.suffix + config.suffix)) {
    const args = message.content.slice(0, -2).split(/ +/)
    if (!chaos[args[0]])
      return 
    else
      return message.channel.send({ content: chaos[args[0]] })
  }
  else return
})

client.login(config.TOKEN);