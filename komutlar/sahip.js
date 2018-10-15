const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Lukker Adlı Botun Sahibi**")
        .setColor(0x00AE86)
        .addField("Adı :", "Furkan", true)
        .addField("Soyadı :", "Arı", true)
        .addField("Yaşı :", "21", true)
        .addField("Kodlama Bilgisi :", "Öğrenmeye Çalışıyor.", true)
        .addField("Mesleği :", "Yazılım Mühendisi", true)


   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sahip', 
  description: 'Botun sahibi hakkında bilgi verir.',
  usage: 'sahip'
};
