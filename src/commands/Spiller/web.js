const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('web', 'Spiller', [ "lenker", "nett", "web", "links"]);
  }

  run(client, message, args) {

    let embed = new MessageEmbed()
        .setTitle('FakeUBER Lenker')
        .setColor('#FFFF55')
        .setThumbnail('https://eu.mc-api.net/v3/server/favicon/mc.fakeuber.xyz')
        .setFooter(`${client.user.username} | !web`, client.user.displayAvatarURL())
        .addFields([
            {
                name: 'Nettside',
                value: '[Trykk Her](https://fakeuber.xyz/)',
                inline: true
            },
            {
                name: 'Regler',
                value: '[Trykk Her](https://www.fakeuber.xyz/regler/)',
                inline: true
            },
            {
                name: 'Kart',
                value: '[Trykk Her](http://kart.fakeuber.xyz/)',
                inline: true
            },
            {
                name: 'Stem',
                value: '[Trykk Her](https://www.fakeuber.xyz/stem/)',
                inline: true
            }
        ]);

    message.channel.send(embed);

  }
}