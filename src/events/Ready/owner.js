const BaseEvent = require('../../base/structures/Event');

		module.exports = class ReadyEvent extends BaseEvent {
			constructor() {
			  super('ready');
			}
			
    
      async run (client) {


      setTimeout(async () => {
        await client.logger.cjay("Bot Created By BearSuits YT", "warn")
      }, 500)
    }
}