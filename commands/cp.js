const chaos = require('../db/chaos.json')

module.exports = {
    callback: (message, ...args) => {
        if (!chaos[args[0]])
            return message.reply({ content: 'No key found' })
        else
            message.channel.send({ content: chaos[args[0]] })
    }
}