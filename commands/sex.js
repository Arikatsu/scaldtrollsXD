const Canvas = require('@napi-rs/canvas')
const { readFile } = require('fs/promises')
const { request } = require('undici')
const { MessageAttachment } = require('discord.js')

module.exports = {
    callback: async (message, ...args) => {
        const msg = await message.channel.send('working on it...')
       try {
        let member1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[0].toLocaleLowerCase());
        let member2 = message.mentions.members.first(2)[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[1].toLocaleLowerCase());

        const canvas = Canvas.createCanvas(750, 1060);
        const context = canvas.getContext('2d');

        const backgroundFile = await readFile('./db/hentai.jpg');
        const background = new Canvas.Image();
        background.src = backgroundFile;

        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        const body1 = (await request(member1.displayAvatarURL({ format: 'jpg' })))["body"];
        const avatar1 = new Canvas.Image();
        avatar1.src = Buffer.from(await body1.arrayBuffer());

        const body2 = (await request(member2.displayAvatarURL({ format: 'jpg' })))["body"];
        const avatar2 = new Canvas.Image();
        avatar2.src = Buffer.from(await body2.arrayBuffer());

        context.drawImage(avatar1, 128, 244, 150, 150);
        context.drawImage(avatar2, 296, 189, 150, 150);

        const attachment = new MessageAttachment(canvas.toBuffer('image/png'), 'hentai.png');
        
        msg.edit({ content: "done", files: [attachment] })
       } catch(err) {
        msg.delete()
        message.channel.send('Error, check your inputs').then(console.log(err))
       }
    }   
}