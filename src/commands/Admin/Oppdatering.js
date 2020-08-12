const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

var today = new Date();
var date = (today.getDate())+'/'+(today.getMonth()+1);

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('oppdatering', 'testing', [ "opt", "oppdatering", "update" ]);
  }

  run(client, message, args) {
  
    const moritz = '381453904749002756';
    const oppdateringsKanal = client.channels.cache.get('719927990473064469');

    if (message.author.id != moritz) return message.channel.send('Du har ikke tilgang til dette.');

    console.log(message.content);

    let oppdatering = message.content.slice(5).split('*').join('\n· ')

    console.log(oppdatering);

    let embed = new MessageEmbed()
      .setTitle(date)
      .setDescription(oppdatering);

    oppdateringsKanal.send('<@&743068390586974258>', embed)
      .then(m => {
        m.react(message.guild.emojis.cache.get('742127048822095992'))
        m.react(message.guild.emojis.cache.get('742127048474099804'))
      });

  }
}
