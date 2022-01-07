const BaseEvent = require('../base/structures/Event');
const config = require('../base/data/config')
const Discord = require('discord.js')

    module.exports = class MessageEvent extends BaseEvent {
        constructor() {
          super('message');
        }
        
        async run(client, message) {
            
            if(message.author.bot || !message.guild) return
            
            //guild
        
            
            //config
            const author = message.author;
           
            //prefix
            const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex('?')})\\s*`);
            if (!prefixRegex.test(message.content)) return;
            const [, matchedPrefix] = message.content.match(prefixRegex);


            //commands
            const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
            if(!cmd) return;

            
            //cooldowns
            const { cooldowns } = client;
            if (!cooldowns.has(cmd.name)) {
	        cooldowns.set(cmd.name, new Discord.Collection());
            }

             const now = Date.now();
             const timestamps = cooldowns.get(cmd.name);
             const cooldownAmount = (cmd.cooldown || 3) * 1000;

            if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.error(client.t("error/error:TIMEOUT"), {timeLeft: timeLeft})
            }}
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

            

           //translation
            function t(key, options){
                const language = client.translations.get('en-US');
                if (!language) throw "Invalid language set in data.";
                return language(key, options);
            } 
            //run command
            try {
                cmd.run(client, message, t, author, args);
            }catch(e) {
                console.error(e);
                return message.error(client.t("error/error:ERR_OCCURRED"));
        }}
    }
