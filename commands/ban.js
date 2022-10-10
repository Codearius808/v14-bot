const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
let reason = args[1]



        if(!user) return message.channel.send("Lütfen Banlanacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.ban()







db.set(`banreason_${user.id}`, reason || "Sebep Belirtilmemiş!")
message.channel.send("Banladım!")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban"
};