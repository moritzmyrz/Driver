// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require("../utils/structures/BaseEvent");
const Discord = require("discord.js");
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super("guildMemberAdd");
  }

  async run(client, member) {

    const guild = client.guilds.cache.get('718959642482573343');
    const spillerRole = guild.roles.cache.get('729077085905092739');
    const moritz = client.users.cache.get('381453904749002756');
    // List of welcome-gifs
    let gifs = [
      "https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif",
      "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
      "https://media.giphy.com/media/eoVusT7Pi9ODe/giphy.gif",
      "https://media.giphy.com/media/3o6YfZXhhHA7XkB9Pa/giphy.gif",
      "https://media.giphy.com/media/7dWhY1FK7CFTDdpSMB/giphy.gif",
      "https://media.giphy.com/media/5hfinCirdgvzwlqaWU/giphy.gif",
      "https://media.giphy.com/media/26vUTlnHulTgAU7le/giphy.gif",
      "https://media.giphy.com/media/EOejKJzxnVAsnw6auM/giphy.gif",
    ];

    // Random num-gen
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    member.roles.add(spillerRole)
      .catch(err => moritz.send(err));

    // Welcome Embed
    const embed = new Discord.MessageEmbed()
      .setTitle(`Velkommen, ${member.displayName}`)
      .setDescription(
        `Velkommen til FakeUBER, <@${member.id}>. Ta en titt innom <#719263828268810371>!`
      )
      .setTimestamp()
      .setImage(gifs[randomIntFromInterval(0, 7)])
      .setColor("#41fc03")
      .setThumbnail(guild.iconURL())
      .setFooter(`${member.user.tag}`, `${member.user.displayAvatarURL()}`);

    const welcomeChannel = client.channels.cache.get("719639885350305883");
    welcomeChannel.send(embed).then((m) => m.react("❤"));

  }
};
