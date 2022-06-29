module.exports = {
    callback: (message, ...args) => {
        const replies = ['no', 'nah', 'fuck no', 'git gud', 'lol no', 'shut the fuck up', 'never', 'ur dumb lol', 'yes', 'yeah', 'ok', 'sure', 'of course idiot', 'yes imo', 'ong bro', 'okay']
        if (args[0].toLowerCase() == 'pick-') {
            args = args.slice(1)
            let choice = args[Math.floor(Math.random() * args.length)];
            message.reply(choice)
        }
        else {
            let reply = replies[Math.floor(Math.random() * replies.length)];
            message.reply(reply)
        }
    }
}