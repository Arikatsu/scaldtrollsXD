const chaos = require('../db/chaos.json')
const fs = require('fs')

module.exports = {
    callback: (message, ...args) => {        
        let checker = args.indexOf('|')
        if (checker === -1) 
            return message.reply('Use the correct format jesse: `?cp <key> | <value>`')

        let keyArray = args.slice(0, checker)
        let valueArray = args.slice(checker + 1)

        let argument = keyArray.join(' ')
        let str = valueArray.join(' ')

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
            message.channel.send("A key with the same name already exists, type `yes` to overwrite it").then(() => {
                message.channel.awaitMessages({
                    filter: msgfilter,
                    max: 1,
                    time: 30000,
                    errors: ['time']
                }).then(message => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                        json[argument] = str
                        let data = JSON.stringify(json, null, 2)
                        fs.writeFileSync(`./db/chaos.json`, data)
                        return message.reply('done')
                    } else {
                        return message.channel.send(`procedure cancelled`)
                    }
                }).catch(collected => {
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