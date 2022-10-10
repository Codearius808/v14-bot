exports.run = async(client, message, args) => { 
    let id = "sahip id yazın"
    let sahip = client.users.cache.get(id)
    message.channel.send(`Benim Yapımcım: @Liratiry#3409`)
    }
    exports.conf = {
      aliases: ['yapımcı']
    };
    exports.help = {
     name: 'sahip'
    };