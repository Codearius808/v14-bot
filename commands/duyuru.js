const Discord = require('discord.js')
exports.run = async(client, message, args) => {

if(!message.member.permissions.has("0x0000000000000020")) return message.reply("Yetersiz Yetki!")

let csd = args[0]
if(!csd) return message.reply("Lütfen Bir Duyuru Metni Yaz!")

await message.delete()

message.channel.send({ embeds: [new Discord.EmbedBuilder()
.setTitle("**Liratiry Duyuru Sistemi**")
.setColor(Discord.Colors.Blue)
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
.setDescription(args.slice(0).join(" "))
.setImage(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
.setTimestamp() ]})
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: 'duyuru'
}
