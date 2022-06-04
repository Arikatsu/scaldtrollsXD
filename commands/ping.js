module.exports = {
    callback: (message) => {
        message.channel.send('scald is loading...').then (async (msg) =>{
              msg.edit(`ping is ${msg.createdTimestamp - message.createdTimestamp}ms.`)
        })
    }
}
