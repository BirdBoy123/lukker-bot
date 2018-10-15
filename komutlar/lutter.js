const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**LUKKER**")
        .setImage("https://figurex.net/wp-content/uploads/2018/01/2-homer-simpson.jpg")
        .setThumbnail("https://figurex.net/wp-content/uploads/2018/01/2-homer-simpson.jpg")
        .setColor(0x00AE86)
        .addField("Lakabı", "Kaslı Adam", true)
        .addField("Sahibi", `Furkan#4340`, true)
        .addField("Özellikleri", `Çok Güçlüdür`, true)
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'lukker', 
  description: 'Lukker botu hakkında bilgi verir',
  usage: 'lukker'
};