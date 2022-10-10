const Discord = require('discord.js');
exports.run = async(client, message, args) => {

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`> **Bu komutu kullanabilmek için "\`YÖNETİCİt\`" yetkisine sahip olmalısın.**`)

let mesaj = args[0]
if (!mesaj) return message.channel.send('> **Birşey Yazmalısınız**')

await message.delete()

const mesajat = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setDescription(args.slice(0).join(' '))

message.guild.members.cache.map(async user => {
await user.send({ embeds: [mesajat] }).catch(e => {})
})

await message.channel.send(`> **✅ Mesaj basariyla gonderildi.**`)

}

exports.conf = {
aliases: ['duyurlaherkese']
}

exports.help = {
name: 'dm-duyuru'
}