const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

let channel = message.channel
channel.permissionOverwrites.create(
  "1018306077521100811", {SendMessages: true})
  message.reply("**Başarıyla Açıldı**!")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "aç"
};
