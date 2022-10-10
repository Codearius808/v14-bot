const {EmbedBuilder} = require("discord.js");
const { stat } = require("fs");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {
    Gamedig.query({
        type: 'mtasa',
        host: '193.223.107.175'
    }).then((state) => {
        console.log(state)
        const embed = new EmbedBuilder()
        .setDescription(`Sunucu Adı: **`+state.name+"**\n\nAktif Oyuncu: **"+state.raw.numplayers+"**   **By Liratiry**")
        .setColor("Red")
message.reply({embeds: [embed]}).then(async msg => {
 setTimeout(async() => {
await msg.delete().catch(e => {})
}, 10000)
    });
})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "sw"
};