const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const ping = require('minecraft-server-util');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('server', 'Spiller', [ "server", "online", "o"]);
  }

  run(client, message, args) {
    ping('mc.fakeuber.xyz', 25565, (error, response) => {
        if (error) throw error;
     
        let embed = new MessageEmbed()
            .setTitle('FakeUBER')
            .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${response.host}`)
            .setColor('#fffb00')
            .setFooter(`${client.user.username} | !server`, client.user.displayAvatarURL())
            .addFields([
                {
                    name: 'IP-Addresse',
                    value: response.host,
                    inline: true
                },
                {
                    name: 'Pålogget',
                    value: `${response.onlinePlayers}/${response.maxPlayers}`,
                    inline: true
                }
            ]);
        
        message.channel.send(embed);
    });
  }
}