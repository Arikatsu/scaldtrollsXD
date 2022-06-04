const db = require('quick.db');

module.exports = {
    callback: (message, ...args) => {
        var string = ''
        for (const arg of args) {
            string = string + arg + " ";
        }
        string = string.slice(0, -1);
        let argument = db.get(string);
        if(argument === null) {
            return 'not found';
        } else {
            message.channel.send(argument)
        }
    }
}