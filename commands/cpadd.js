const chaos = require('../db/chaos.json')
const fs = require('fs')

module.exports = {
    callback: (message, ...args) => {
        var argument = args[0].toLowerCase()
        var arr = args.slice(1);
        var str = arr.join(' ')
        let json = null
        try {
            json = JSON.parse(chaos) 
        } catch (e) {
            json = chaos;
        }
        if (!argument)
            message.reply('add something')
        else if (chaos[argument]) {
            let msgfilter = m => m.author.id === message.author.id
            message.channel.send("a key with the same name already exists, type `yes` to overwrite it").then(() => {
                message.channel.awaitMessages({
                    filter: msgfilter,
                    max: 1,
                    time: 30000,
                    errors: ['time']
                })
                    .then(message => {
                        message = message.first()
                        if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                            json[argument] = str
                            let data = JSON.stringify(json, null, 2)
                            fs.writeFileSync(`./db/chaos.json`, data)
                            return message.reply('done')
                        } else {
                            return message.channel.send(`procedure cancelled`)
                        }
                    })
                    .catch(collected => {
                        message.channel.send('Timeout');
                    });
            })
        }
        else {
            json[argument] = str
            let data = JSON.stringify(json, null, 2)
            fs.writeFileSync(`./db/chaos.json`, data)
            message.reply('done');
            console.log(`added ${argument} to database`)
        }
    }
}