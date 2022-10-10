const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.on('guildMemberAdd', member => {
  member.send("*Sunucumuza Hoş Geldin**").catch(err => console.log(err));
})

//mesaj log
const qdb = require('croxydb')
client.on('messageDelete', async message => {  
  if(message.author.bot) return;
  let id = qdb.get(`log_${message.guild.id}`)
  let log = qdb.get(`log_${message.guild.id}`)
  if(!log) return;
  const channel = client.channels.cache.get(log);
  if(!channel) return;
  let silinen = new Discord.EmbedBuilder()
                         .setAuthor({ name :  `${message.author.tag}`, iconURL : message.author.avatarURL()})
                         .setTitle("Mesaj silindi!")                
                         .addFields({name :`Silinen mesaj :`, value:`${message.content}`}, {name :`Kanal :`, value :`${message.channel.name}` })
                         .setTimestamp()
                         .setColor("White")
     
channel.send({embeds : [silinen]}).catch(err => {})
     });
     
client.on('messageUpdate', async(oldMessage, newMessage) => {
if(oldMessage.content == newMessage.content) return;
let log = qdb.get(`log_${oldMessage.guild.id}`)
if(!log) return;
const channel = oldMessage.guild.channels.cache.get(log);
if(!channel) return;
if(newMessage.author.bot) return;
         let güncel = new Discord.EmbedBuilder()
         .setTitle(`Mesaj güncellendi!`)
         .setAuthor({ name : `${oldMessage.author.tag}`, iconURL : oldMessage.author.avatarURL()})
         .addFields({name : "Eski mesaj : ", value : `${oldMessage.content}`}, {name : "Yeni mesaj : ", value :`${newMessage.content}` }, {name : "Kanal : ", value : `${oldMessage.channel.name}`})
         .setTimestamp()
         .setColor("White")
     
         channel.send({embeds : [güncel]}).catch(err => {})
     });

     client.on("ready", () => {
      const guild = client.guilds.cache.random()  
      const channel = client.channels.cache.get("1028732376001564744");
      let csd = require("discord.js")
      setInterval(() => {
      const guild = client.guilds.cache.random()  
      var randomMembers = guild.members.cache.random().user;
      channel.send({ embeds: [new csd.EmbedBuilder()
      .setImage(randomMembers.displayAvatarURL({ dynamic: true }))
      .setColor(csd.Colors.Blue)]})
      }, 10000);
      });
      