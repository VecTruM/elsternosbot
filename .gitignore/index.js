const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})


bot.on('guildMemberAdd', member => {

  let serverTag = member.guild.name
  const welcomechannel = member.guild.channels.find('id', '533916299240407070')
  const role = member.guild.roles.find("name", "Joueurs/Joueuses")    
  member.addRole(role)
  var embed = new Discord.RichEmbed()
  .setColor('#76D880')
  .setDescription(`:inbox_tray: <@${member.user.id}> à rejoint ${serverTag}`)
  return welcomechannel.send({embed})
});

bot.on('guildMemberRemove', member => {

  let serverTag = member.guild.name
  const welcomechannel = member.guild.channels.find('id', '533916299240407070')
  var embed = new Discord.RichEmbed()
  .setColor('#C11C19')
  .setDescription(`:outbox_tray: <@${member.user.id}> est partit de ${serverTag}`)
  return welcomechannel.send({embed})
});

//__INFORMATIONS__//

bot.on('message', message => {
  if (message.content === '+' + 'information') {
  var sinfo_embed = new Discord.RichEmbed()
                     .setColor('#C11C19')
                     .setTitle(`:loudspeaker: INFORMATIONS`)
                     .setDescription('J\'arrive tout bientot !')
                     .setTimestamp()
              message.channel.send(sinfo_embed)
  }
 })

//________MODERATION________//

//KICK

  bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('+kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Opération du kick réussi ${user.tag}`);
          }).catch(err => {
            message.reply('Opération impossible');
            console.error(err);
          });
        } else {

          message.reply('Après mainte recherche ce joueur est introuvable.');
        }

      } else {
        message.reply('Syntaxe éronnée : Mention du membre invalide.');
      }
    }
  });

//BAN

bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('+ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'C\'est dommage'
          }).then(() => {
            message.reply(`:hammer: ${user.tag} C'est fait bannir ! `);
          }).catch(err => {
            message.reply('Le joueur ne peut pas etres bannis');
            console.error(err);
          });
        } else {
          message.reply('Après mainte recherche ce joueur est introuvable.');
        }
      } else {
        message.reply('Syntaxe éronnée : Mention du membre invalide.');
      }
    }
  });

//________COMMANDES________//

bot.on('message', message => {
  if (message.content === '+' + 'ping') {
  message.channel.send("Pong ! `" + bot.ping + "ms`")
  .catch((err) => {
  console.error(err)})
 }
})

bot.on('message', message => {
  if (message.content === '+' + 'ip') {
  message.channel.send("Ip : elsternos.inovaperf.fr :white_check_mark: ")
  .catch((err) => {
  console.error(err)})
 }
})

bot.on('message', message => {
  if (message.content === '+' + 'site') {
  message.channel.send("https://elsternos.netlify.com")
  .catch((err) => {
  console.error(err)})
 }
})


bot.on('message', message => {
  if (message.content === '+' + 'help') {
  var help_embed = new Discord.RichEmbed()
                 .setColor('#C11C19')
                 .setTitle(`:loudspeaker: Commandes du bot Disponibles`)
                 .setDescription(`Prefix : "+"`)
                 .setThumbnail(`${client.user.avatarURL}`)
                 .addBlankField(true)
                 .addField(":paperclip: Commandes principales","`\"!help\"`Besoin d'aide ?\n`\"!site\"`Site du serveur\n`\"!ip\"`Affiche l'ip du serveur\n")
                 .addBlankField(true)
                 .addField(":rose: Commandes Fun","`\"!ping\"`Affiche le Ping du Bot")
                 .addBlankField(true)
                 .setFooter(`${client.user.username}`)
                 .setTimestamp()
             message.author.send(help_embed)
             message.channel.send('Les commandes vous on été envoyé en Mp '+ message.author +'.')
             message.delete()
             .catch((err) => {
             console.error(err)})
  }
 })

bot.on('ready', () => { bot.user.setGame('elsternos.inovaperf.fr') })


//______MESSAGE AUTOMATIQUE______//

bot.on('message', message => {
  if (message.content === 'Bonjour') {
    message.reply('Bonjour !')
  }
})

bot.on('message', message => {
  if (message.content === 'Bjr') {
    message.reply('Bonjour, la vie est belle')
  }
})

bot.on('message', message => {
  if (message.content === 'bjr') {
    message.reply('Bonjour')
  }
})

bot.on('message', message => {
  if (message.content === 'cc') {
    message.reply('Coucou toi !')
  }
})

bot.on('message', message => {
  if (message.content === 'slt') {
    message.reply('Salut')
  }
})

bot.on('message', message => {
  if (message.content === 'Slt') {
    message.reply('Salut on se connait ?')
  }
})

bot.on('message', message => {
  if (message.content === 'Salut') {
    message.reply('Salut')
  }
})
bot.on('message', message => {
  if (message.content === 'Hello') {
    message.reply('Hello bienvenue sur Elsternos !')
  }
})

bot.on('message', message => {
  if (message.content === 'Yoch') {
    message.reply('Bonjour !')
  }
})

bot.on('message', message => {
  if (message.content === 'yoch') {
    message.reply('Yo yo ')
  }
})

bot.on('message', message => {
  if (message.content === 'Yo') {
    message.reply('Yooo !')
  }
})

bot.on('message', message => {
  if (message.content === 'hello') {
    message.reply('Hey')
  }
})

bot.on('message', message => {
  if (message.content === 'Hi') {
    message.reply('Hi men')
  }
})

bot.on('message', message => {
  if (message.content === ('Bonsoir')) {
    message.reply('Bonsoir !')
  }
})

bot.on('message', message => {
  if (message.content === 'bonsoir') {
    message.reply('Bonsoir et bonne nuit !')
  }
})

bot.on('message', message => {
  if (message.content === 'Bsr') {
    message.reply('Bonsoir ')
  }
})

bot.on('message', message => {
  if (message.content === 'bsr') {
    message.reply('Bonsoir !')
  }
})

bot.on('message', message => {
  if (message.content === 'Hey') {
    message.reply('Hey hey')
  }
})

bot.on('message', message => {
  if (message.content === 'hey') {
    message.reply('Hey ')
  }
})

bot.login('NTU4NzQ5MjQzNDMxNDUyNjky.D3bXng.fn4DBmmJIaRA6oCVky_Tso0fDSA')
