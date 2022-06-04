const bl = require('../blacklist.json')

module.exports = {
    callback: (message, ...args) => {
        var string = args.join(" ")
        let checker = false;
        var regex = new RegExp(bl.keys, "gi");
        if (string.match(regex)) {checker = true;}
        if (checker == true)
        return message.reply("your message contains blacklisted words")
        else {
            message.channel.send(string)
        }
        checker = false;
    }
}