const bl = require('../db/blacklist.json')

module.exports = {
    callback: (message, ...args) => {
        if (!args[0]) return
        else {
            var string = args.join(" ")
            if (new RegExp(bl.join("|")).test(string)) {
                message.reply("your message contains blacklisted words")}
            else {
                message.channel.send(string)
            }
        }
    }
}