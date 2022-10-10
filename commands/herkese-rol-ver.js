const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("Lütfen bir rol belirt.")
    message.guild.members.cache.forEach(arez => arez.roles.add(rol.id))
    return message.reply(`Herkese **${rol.id}** id'li rol veriliyor. Bu işlem sunucunun büyüklüğüne göre olarak zaman alabilir.`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "herkeserolver"
};