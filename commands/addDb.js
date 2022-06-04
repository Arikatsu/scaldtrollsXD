const db = require('quick.db');

module.exports = {
    callback: (message, ...args) => {
        var argument = args[0].toLowerCase()
        var arr = args.slice(1);
        var str = arr.join(' ')
        if (!argument)
        message.reply('add something')
        else if (db.has(argument) == true) {
            let filter = m => m.author.id === message.author.id
            message.channel.send("a key with the same name already exists, type `yes` to overwrite it").then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                  .then(message => {
                      message = message.first()
                      if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                          db.set(argument, str)
                          message.reply('done')
                      } else {
                      message.channel.send(`procedure cancelled`)
                  }
              })
              .catch(collected => {
                  message.channel.send('Timeout');
              });
          })
        }
        else {
          db.set(argument, str)
          message.reply('done');
          console.log(`added ${argument} to database`)
        }
    }
}