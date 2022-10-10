const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
if (!rol) return message.reply("Lütfen bir rol etiketle!")
message.reply("Başarıyla jail rolü <@&"+rol+"> Olarak Ayarlandı.")
db.set(`jailrol_${message.guild.id}`, rol.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "jail-rol"
};