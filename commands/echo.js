const bl = require('../blacklist.json')
// format = ["faggot","nigger","nigga"]

module.exports = {
    callback: (message, ...args) => {
        var string = ''
        for (const arg of args) {
            string = string + arg + " ";
        }
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