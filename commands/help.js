const { MessageEmbed } = require('discord.js');

module.exports = {
    callback: (message) => {
    const helpEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('__[ALL COMMANDS]__')
      .setDescription('TIP: you can use "?" suffix at the end too \nexample: `echo <value>?`')
      .addFields(
        { name: 'cp', value: 'syntax:  ?<key> <value> `//<key> should be a single word or multpile words joint with special characters like underscores`' },
        { name: 'echo', value: 'syntax: ?echo <value> `//repeats your message`' },
        { name: 'hi', value: 'syntax: ?hi `//wtf was wrong with me when i made that`' },
        { name: 'ping', value: 'syntax: ?ping `//pong`' },
        { name: '8ball', value: 'syntax: ?8ball <question> `//replies with yes or no depending on the question`' },
        { name: 'hentai', value: 'syntax: ?hentai `//sends random hentai`' },
        { name: 'PRINTING FROM DATABASE', value: 'use "??" at the end or the start, there is no command for it \nexample: ??<key from db> or <key from db>??'}
      )
      .setFooter({ text: 'printing from db is different than using the other commands, to use use commands you will still enter the command name at the start no matter if you put "?" at the end or start, meanwhile printing from db is just putting "??" at the start or end' });
    message.reply({ embeds: [helpEmbed]})
  }
}