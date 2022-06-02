module.exports = {
    callback: (message) => {
        message.channel.send('scald is loading...').then (async (msg) =>{
            setTimeout(function(){
              msg.delete()
              message.channel.send(`ping is ${msg.createdTimestamp - message.createdTimestamp}ms.`)
            }, 1000 * 2)
        })
    }
}
