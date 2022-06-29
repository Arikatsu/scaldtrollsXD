const { getImage } = require('random-reddit')

module.exports = {
    callback: async (message, ...args) => {
        let hentaisubs = ['hentai', 'GenshinImpactHentai', 'HuTaoNSFW', 'RaidenNSFW', 'HENTAI_GIF']
        let hentai = hentaisubs[Math.floor(Math.random() * hentaisubs.length)]

        let subreddit
        if (args[0]) {
            subreddit = args[0]
            if (subreddit.toLowerCase().substring(0, 2) == 'r/') {
                subreddit = subreddit.slice(2)
            }
        }

        const msg = await message.channel.send('fetching hentai...')
        const image = await getImage(subreddit || hentai, 30)
        msg.delete()
        message.channel.send(image)
    }
}