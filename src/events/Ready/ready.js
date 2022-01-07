
const BaseEvent = require('../../base/structures/Event');

		module.exports = class ReadyEvent extends BaseEvent {
			constructor() {
			  super('ready');
			}
			
    // this file is run when the bot logs in... not much here yet but im sure you can find something cool ;)
      async run (client) {
        client.logger.bot(`${client.user.tag} Logged In`, "READY")
          client.user.setStatus('online')
          client.user.setActivity("Youtube", {type: "WATCHING"})
          }
      }
    