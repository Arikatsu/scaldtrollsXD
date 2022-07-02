const fs = require('fs');
const getFiles = require('./get-files')
const config = require('./config.json')

module.exports = (client) => {
    const commands = {}

    const suffix = '.js'

    const commandFiles = getFiles('./commands', suffix)
    console.log(commandFiles)

    for (const command of commandFiles) {
        let commandFile = require(command)
        if (commandFile.default) commandFile = commandFile.default

        const split = command.replace(/\\/g, '/').split('/')
        const commandName = split[split.length -1].replace(suffix, '')

        commands[commandName.toLowerCase()] = commandFile
    }

    console.log(commands)

    client.on('messageCreate', (message) => {
        var args 
        if(message.author.bot || !message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")){
            return
        }
        else if(message.content.startsWith(config.prefix)) {
            args = message.content.slice(1).split(/ +/)
        }

        else if(message.content.endsWith(config.suffix)) {
            args = message.content.slice(0, -1).split(/ +/)
        }

        var commandName
        if (message.content.startsWith(config.prefix)) {
            commandName = args.shift().toLowerCase()
        }

        else if (message.content.endsWith(config.suffix)) {
            commandName = args[0]
            args = args.slice(1)
        }

        if (!commands[commandName]) {
            return
        }

        try {
            commands[commandName].callback(message, ...args)
        } catch (error) {
            console.log(error)
        }
    })
}
