const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class NotifikasjonCommand extends BaseCommand {
  constructor() {
    super('notifikasjon', 'Admin', []);
  }

  run(client, message, args) {
    const moritz = '381453904749002756';
    const rollerKanal = client.channels.cache.get('743064308497383455');
    if (message.author.id != moritz) return message.channel.send('Du har ikke tilgang til dette.');

    notifikasjon();

    function notifikasjon() {
      const notifikasjon = new MessageEmbed()
        .setColor('#158467')
        .setTitle('Notifikasjoner');

      rollerKanal.send(notifikasjon)
        .then(
          rollerKanal.send(
            ':new: - Hold deg oppdatert på nye oppdateringer!\n' +
            ':loudspeaker: - Få notifikasjoner når det kommer en ny kunngjøring!'
          )
          .then(m => message.channel.send(`Message ID: ${m.id}`)));
    }

  }
}