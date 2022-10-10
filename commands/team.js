const {EmbedBuilder} = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
        .setDescription("**TEAMSPEAK İP : 135.125.155.16:9987**")
        .setColor("Red")
        .setImage ("https://cdn.discordapp.com/attachments/1014277835965345924/1024697017387192400/ewingg.png")
message.reply({embeds: [embed]}).then(async msg => {
})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "team"
};