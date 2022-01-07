
const options = { fetchAllMembers: false, enableEveryone: false, partials: ["MESSAGE", "USER", "REACTION", "CHANNEL"], restTimeOffset: 0 }


const CandyBot = require('./base/Candy.js')
const client = new CandyBot(options)
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
    .on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
	.on("error", (e) => client.logger.log(e, "error"))
    .on("warn", (info) => client.logger.log(info, "warn"));
    
    process.on("unhandledRejection", (err) => {
        console.error(err);
    });


    const init = async () => {    
        client.initialize(client)

        const languages = require("./base/structures/languages");
        client.translations = await languages();
        
    
     };
    
    init();