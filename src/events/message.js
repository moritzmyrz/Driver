const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    if (message.channel.id !== '726574778747715615') {
      if (message.content.startsWith('!') || message.content.startsWith('-')) {
        if (message.author.id !== '381453904749002756') {
          message.delete({ timeout: 15000 });
          message.channel.send(`<@${message.author.id}>, vi har en egen kanal for kommandoer. ->> <#726574778747715615> <<-`)
            .then(message => message.delete({ timeout: 15000 }));
        }
      }
    }

    if (message.author.bot) return;
    const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
    const command = client.commands.get(cmdName);
    if (command) {
      if (!message.content.startsWith('!')) return;
      command.run(client, message, cmdArgs);
    }

    if (message.content === 'yesyes') {
      if (!message.author.id === '381453904749002756') return;
      const embed = new MessageEmbed()
        .setTitle('Regler')
        .setColor('#F43D2B')
        .setDescription(
          '[1] Å ødlegge andres bygg er ikke tillatt.\n' +
          '[2] All form for spam er ikke tillatt.\n' +
          '[3] Unngå å bruke store bokstaver(caps) i store mengder.\n' +
          '[4] Ikke utgi deg for å være noen andre.\n' +
          '[5] Bruk av upassende skins er ikke tillatt.\n' +
          '[6] Svindel og lur av andre spillere er ikke tillatt.\n' +
          '[7] Bruk av maskiner som kan skape lag for andre spillere eller på serveren.\n' +
          '[8] Å utnytte bugs som gir deg en fordel er ikke tillatt.\n' +
          '[9] Tigging, altså å be om ting fra andre spillere er ikke tillatt.\n' +
          '[10] Redstone loops som står konstant på er ikke tillatt.\n' +
          '[11] Hold en viss avstand til andres spillere bygg om du ikke har tillatelse til å bygge nærmere.\n' +
          '[12] Respekter andre spillere og staffmedlemmer.\n' +
          '[13] Du skal oppføre deg ordentlig.\n' +
          '[14] Oppfordring til andre om å bryte reglementet er ikke tillatt.\n' +
          '[15] Man skal passe på språkbruket sitt i chat.\n' +
          '[16] Det å reklamere i store mengder er ikke tillatt.\n' +
          '[17] Å drepe andre spillere skal KUN skje med dems samtykket, memindre de oppfordrer til det.\n' +
          '[18] Vær mot andre som du selv ønsker å bli behandlet.\n' +
          '[19] Ikke del personlig informasjon om andre.\n' +
          '[20] Det er lov med pranks, helt til det kommer til en punkt hvor det ikke er gøy for alle.\n'
        );

      message.channel.send(embed);
    }
  }
}