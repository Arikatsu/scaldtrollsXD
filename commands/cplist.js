const chaos = require('../db/chaos.json')

module.exports = {
    callback: (message) => {
        let list = Object.keys(chaos).join(", ")
        message.channel.send({
            embeds: [{
                title: `List of all keys in database`,
                description: `${list}`,
                color: 'RANDOM',
                footer: {
                    text: message.author.tag
                }
            }]
        })
    }
}