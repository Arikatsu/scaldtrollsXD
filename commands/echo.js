const bl = require('../blacklist.json')

module.exports = {
    callback: (message, ...args) => {
        var string = args.join(" ")
        let checker = false;
        if (new RegExp(bl.join("|")).test(string)) {
            checker = true;
        }
        if (checker == true)
        message.reply("your message contains blacklisted words")
        else {
            message.channel.send(string)
        }
        checker = false;
    }
}