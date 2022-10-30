const replies = ['no', 'nah', 'fuck no', 'git gud', 'lol no', 'shut the fuck up', 'never', 'ur dumb lol', 'yes', 'yeah', 'ok', 'sure', 'of course idiot', 'yes imo', 'ong bro', 'okay']

module.exports = {
    callback: (message, ...args) => {
       if (!args[0]) return
       else {
        if (args[0].toLowerCase() == 'pick-') {
            args = args.slice(1)
            args = args.join(' ').split(',')
            message.channel.send(args[Math.floor(Math.random() * args.length)]) 
        }
        else {
            let reply = replies[Math.floor(Math.random() * replies.length)];
            message.reply(reply)
        }
       }
    }
}