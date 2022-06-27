const { getImage } = require('random-reddit')

module.exports = {
    callback: async (message) => {
        let hentaisubs = ['hentai', 'GenshinImpactHentai', 'HuTaoNSFW', 'RaidenNSFW', 'HENTAI_GIF']
        let hentai = hentaisubs[Math.floor(Math.random() * hentaisubs.length)]

        const msg = await message.channel.send('fetching hentai...')
        const image = await getImage(hentai, 30)
        msg.delete()
        message.channel.send(image)
    }
}