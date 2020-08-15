// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super('voiceStateUpdate');
  }
  
  async run(client, oldState, newState) {
    const member = oldState.member
    const staffChat = client.channels.cache.get('719929887246254100');
    const staffRole = '719930142604132482', sjefRole = '719617349912625293';
    if (member.roles.cache.has(sjefRole) || member.roles.cache.has(staffRole)) return;

    if (oldState.channel === staffChat) {
      staffChat.updateOverwrite(member, {
        VIEW_CHANNEL: false
      })
    }
    if (newState.channel === staffChat) {
      staffChat.updateOverwrite(member, {
        VIEW_CHANNEL: true
      })
    }

  }
}