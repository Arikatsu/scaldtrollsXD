const { getImage } = require('random-reddit')

module.exports = {
    callback: async (message, ...args) => {
        if (args[0]) return
        else {
            const msg = await message.channel.send('fetching kimi...')
            const image = await getImage('HuTaoNSFW', 20)
            msg.delete()
            message.channel.send(image)
        }
    }
}