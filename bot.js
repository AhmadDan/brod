var prefix = ""
client.on('message', message => {
        if (message.author.id === client.user.id) return;
        let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
            if(message.content.split(' ')[0] == prefix + 'bc') {
                if(!message.channel.guild)return message.reply('warning | هذا الامر يعمل بالخوادم فقط لايعمل بالخاص');                

            if (!args[1]) {
                message.channel.send("bc <message>");
                return;
            }
            message.guild.members.forEach(m => {
                if(!message.member.hasPermission('ADMINISTRATOR')) return;
                    var bc = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .addField('● Sender  :', ${message.guild.name},true)
                    .addField(' **● Server  :*', ${message.author.username}#${message.author.discriminator},true)
                    .addField(' *● message  :*** ', args)
                    .setThumbnail(message.guild.iconURL)
                    .setColor('#ff9900')
                    m.send(${m},{embed: bc});
                });
                const AziRo = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)   
                .setTitle('heavy_check_mark️ | جاري ارسال رسالتك ') 
                .addBlankField(true)
                .addField('busts_in_silhouette | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
                .addField('clipboard| الرسالة ', args)
                .setColor('#ff9900')  

                message.channel.sendEmbed(AziRo).then(msg => {msg.delete(8000)});;   
                

                }
         else {
            return;
        }
        
});
client.login(process.env.TOKEN);