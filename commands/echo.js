const bl = require('../blacklist.json')

module.exports = {
    callback: (message, ...args) => {
        var string = ''
        for (const arg of args) {
            string = string + arg + " ";
        }
        let checker = false;
        var stringCheck = string.toLowerCase();
        for (var i = 0; i <=bl.length; i++) {
            if (stringCheck.includes(bl[i])) {
                checker = true;
            }
        }
        if (checker == true)
        return message.reply("your message has blacklisted words")
        else {
            message.channel.send(string)
        }
        checker = false;
    }
}