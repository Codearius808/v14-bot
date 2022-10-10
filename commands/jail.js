const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let user = message.mentions.members.first()
if (!user) return message.reply("Lütfen bir kullanıcı etiketle!")
let jailrol = db.fetch(`jailrol_${message.guild.id}`)
if (!jailrol) return message.reply("Jail rolü ayarlanmamış!")
    user.roles.set([ jailrol ])
  message.reply("Başarıyla üye jaile atıldı.")
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "jail"
};