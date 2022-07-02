const { getImage } = require('random-reddit')

module.exports = {
    callback: async (message, ...args) => {
        if (args[0]) return
        else if (message.guild.id == '982669799928758313') {
            if (!message.channel.nsfw) {
                message.channel.send('Channel not NSFW')
            }
            else {
                kimi()
            }
        }
        else kimi()

        async function kimi() {
            const msg = await message.channel.send('fetching kimi...')
            const image = await getImage('HuTaoNSFW', 20)
            msg.delete()
            message.channel.send(image)
        }
    }
}