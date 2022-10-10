const superagent = require('superagent');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ files: [response.body.message] });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
};
 exports.conf = {
   aliases: []
 };

 exports.help = {
   name: 'p'
 }; 