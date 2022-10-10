const {EmbedBuilder, Guild} = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
        .setDescription("**Hey Dostum Merhaba Sanırım Beni Tanımak İstemişsin Ben v14 Sürümünde Bir Discord Botuyum Yeni Sistemlerimle Gelişmeye Çalışıyorum Destek Sunucumda Bu ✅ discord.gg/altyapilar ✅**   *Hey Sen Sunucuma Davetlisin 😉*")
        .setColor("#36393F")
        .setImage ("https://cdn.discordapp.com/attachments/1014277835965345924/1024697017387192400/ewingg.png")
message.reply({embeds: [embed]}).then(async msg => {
})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "bilgi"
};  