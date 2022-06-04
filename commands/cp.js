const db = require('quick.db');

module.exports = {
    callback: (message, ...args) => {    
        if (!args[0])
            message.reply('no key provided')
        let argument = db.get(args[0].toLowerCase());
        if(db.has(args[0].toLowerCase()) == false)
            message.reply('key does not exist')
        else if(argument == '') {
            message.reply('the key has no value attached to it')
        } else {
            message.channel.send(argument)
        }
    }
}