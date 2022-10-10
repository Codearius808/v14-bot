const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
if (!rol) return message.reply("Lütfen bir rol etiketle!")
const toplam = rol.members.size
const embed = new EmbedBuilder()
.setDescription("Roldeki Toplam Üye Sayısı: "+toplam+"\n\nBu Role Sahip Olanlar:\n"+rol.members.map(m => m).join("\n"))
.setColor("Random")
message.reply({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "say"
};