// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super('voiceStateUpdate');
  }
  
  async run(client, oldState, newState) {
    const member = oldState.member
    const staffChat = client.channels.cache.get('719929887246254100');

    if (oldState.channel === staffChat) {
      staffChat.overwritePermissions([
        {
          id: member.id,
          deny: ['VIEW_CHANNEL']
        }
      ])
    }
    if (newState.channel === staffChat) {
      staffChat.overwritePermissions([
        {
          id: member.id,
          allow: ['VIEW_CHANNEL']
        }
      ])
    }

  }
}