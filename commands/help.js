const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  callback: async (message) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('help_menu')
          .setPlaceholder('Browse Commands')
          .addOptions([
            {
              label: "Database Commands",
              description: "commands for writing and printing from database",
              value: "first"
            },
            {
              label: "NSFW Commands",
              description: "sussy commands, also kinda fun ones",
              value: "second"
            },
            {
              label: "General Commands",
              description: "normal fun commands",
              value: "third"
            },
            {
              label: "Utility Commands",
              description: "no one uses these",
              value: "fourth"
            },
            {
              label: "Main Page",
              description: "go back to the main page",
              value: "main"
            }
          ])
      )

    let helpEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('__[HELP]__')
      .setDescription('Select a value from the dropdown menu to view the corresponding commands')
      .addField('PREFIX', 'The prefix is "?"')
      .setFooter({ text: 'TIP: you can use "?" prefix as a suffix at the end too \nexample: `echo <value>?`' })

    let embed = await message.channel.send({ embeds: [helpEmbed], components: [row] })

    let embed1 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Database Commands')
      .addFields(
        { name: 'cp', value: 'syntax:  ?<key> | <value>' `//stores a key-value pair to the database` },
        { name: 'cplist', value: 'syntax: ?cplist `//gives a list of all of the keys in the database' },
        { name: 'PRINTING FROM DATABASE', value: 'use "??" at the end or the start, there is no command for it \nexample: ??<key from db> or <key from db>??' }
      )
      .setFooter({ text: 'printing from db is different than using the other commands, to use commands you will still enter the command name at the start no matter if you put "?" at the end or start, meanwhile printing from db is just putting "??" at the start or end with the key name' })

    let embed2 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('NSFW Commands')
      .addFields(
        { name: 'hentai', value: 'syntax: ?hentai `or` ?hentai <subreddit> `//sends random hentai or from a specific subreddit if specified`' },
        { name: 'sex', value: 'syntax: ?sex <mention user 1> <mention user 2> `//sends an hentai image with the profile pictures of the two users as the faces' }
      )

    let embed3 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('General Commands')
      .addFields(
        { name: 'echo', value: 'syntax: ?echo <value> `//repeats your message`' },
        { name: '8ball', value: 'syntax: ?8ball <question> `//responds to you depending on the question`' },
        { name: '8ball pick-', value: 'syntax: ?8ball pick- [array of choices separated by COMMAS] `//picks something from the choices given`'},
        { name: 'hi', value: 'syntax: ?hi `//wtf was wrong with me when i made that`' }
      )

    let embed4 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Utility Commands')
      .addField('ping', 'syntax: ?ping `//pong`')
      .setFooter({ text: 'may add more utility commands for the bot and other info commands' })

    const collector = message.channel.createMessageComponentCollector({
      componentType: "SELECT_MENU"
    })

    collector.on("collect", async (collected) => {
      let value = await collected.values[0]

      if (value == 'first') {
        embed.delete()
        embed = await message.channel.send({ embeds: [embed1], components: [row] })
        return
      }
      if (value == 'second') {
        embed.delete()
        embed = await message.channel.send({ embeds: [embed2], components: [row] })
        return
      }
      if (value == 'third') {
        embed.delete()
        embed = await message.channel.send({ embeds: [embed3], components: [row] })
        return
      }
      if (value == 'fourth') {
        embed.delete()
        embed = await message.channel.send({ embeds: [embed4], components: [row] })
        return
      }
      if (value == 'main') {
        embed.delete()
        embed = await message.channel.send({ embeds: [helpEmbed], components: [row] })
        return
      }
    })
  }
}