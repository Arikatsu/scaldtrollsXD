const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});
const config = require("./config.json");
const chaos = require('./db/chaos.json')

client.on('ready', () => {
  let handler = require('./commandHandler')
  if (handler.default) handler = handler.default

  handler(client)

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith(config.prefix + config.prefix)) {
    const args = message.content.slice(2)
    if (!args)
      return
    else {
      return message.channel.send({ content: chaos[args] })
    }
  }
  else if (message.content.endsWith(config.suffix + config.suffix)) {
    const args = message.content.slice(0, -2)
    if (!args)
      return
    else {
      return message.channel.send({ content: chaos[args] })
    }
  }
  else return
})

client.login(config.TOKEN);