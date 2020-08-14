// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super('voiceStateUpdate');
  }
  
  async run(client, oldState, newState) {
    const member = oldState.member
    const staffChat = '719929887246254100';
    const guild = client.guilds.cache.get('718959642482573343');
    const staffVCRole = guild.roles.cache.get('743865357223067759');

    if (oldState.channelID === staffChat) {
      member.roles.remove(staffVCRole);
    }
    if (newState.channelID === staffChat) {
      member.roles.add(staffVCRole);
    }

  }
}