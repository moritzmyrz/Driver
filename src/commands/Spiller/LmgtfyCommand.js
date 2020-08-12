const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LmgtfyCommand extends BaseCommand {
  constructor() {
    super('lmgtfy', 'Spiller', []);
  }

  run(client, message, args) {
    const content = message.content.slice(8).split(' ').join('+');
    message.channel.send(`https://lmgtfy.com/?q=${content}&iie=1`);
  }
}