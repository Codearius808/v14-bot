const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let user = args[0]
if (!user) return message.reply("Lütfen bir kullanıcı ID girin!")
let sorguapi = db.fetch(`banreason_${user}`)
if (!sorguapi) return message.reply("Bu kullanıcı yasaklanmamış!")
message.reply(user+ " IDLI Kullanıcı **"+sorguapi+"** Sebebiyle Yasaklanmış!")
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban-sorgu"
};