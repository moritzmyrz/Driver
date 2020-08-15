const BaseEvent = require('../utils/structures/BaseEvent');
const ping = require('minecraft-server-util');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  async run (client) {
    console.log(client.user.tag + ' has logged in.');

    setInterval(() => {
      ping('mc.fakeuber.xyz', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
        .then((response) => {
            client.user.setActivity(`${response.onlinePlayers}/${response.maxPlayers} players`, {type:'WATCHING'})
              .then(presence => console.log())
              .catch(console.error);
        })
        .catch((error) => {
            throw error;
        });
    }, 15000)
    setInterval(() => {
      ping('mc.fakeuber.xyz', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
        .then((response) => {
          let online = client.channels.cache.get('720963306671833149');
          online.setName(`Pålogget » ${response.onlinePlayers}`)
        })
        .catch((error) => {
          let online = client.channels.cache.get('720963306671833149');
          online.setName(`Status » ❌ Offline`)
        });
      }, 45000)
  }
}