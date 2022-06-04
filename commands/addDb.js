const db = require('quick.db');

module.exports = {
    callback: (message, ...args) => {
        var argument = args[0]
        var arr = args.slice(1);
        var str = arr.join(' ')
        if (argument === '')
        message.reply('add something')
        else {
          db.set(argument, str)
          message.reply('done');
          console.log(`added ${argument} to database`)
        }
    }
}