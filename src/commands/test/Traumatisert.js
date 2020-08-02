const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('traumatisert', 'testing', []);
  }

  run(client, message, args) {
        message.channel.send(
            'Bruk følgende format:\n'+
            '```'+
            '\nTing:'+
            '\nMeta:'+
            '\nKoordinater:'+
            '```'
        );
  }
}