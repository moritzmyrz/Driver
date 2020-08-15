const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('oppdatering', 'testing', [ "opt", "oppdatering", "update" ]);
  }

  run(client, message, args) {
  
    const moritz = '381453904749002756';
    const oppdateringsKanal = client.channels.cache.get('719929966191444009');

    if (message.author.id != moritz) return message.channel.send('Du har ikke tilgang til dette.');

    console.log(message.content);

    let oppdatering = message.content.slice(5).split('*').join('\n· ')

    console.log(oppdatering);

    let embed = new MessageEmbed()
      .setTitle(`${date}/${month}`)
      .setDescription(oppdatering);

    oppdateringsKanal.send('<@&743068390586974258>', embed)
      .then(m => {
        m.react(message.guild.emojis.cache.get('742127048822095992'))
        m.react(message.guild.emojis.cache.get('742127048474099804'))
      });

  }
}
