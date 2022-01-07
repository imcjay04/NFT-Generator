const { Client, Collection, MessageEmbed } = require("discord.js");
const { registerCommands, registerEvents } = require('./structures/registry')
require("./partials/extenders");
const util = require("util"),
    path = require("path"),
    { Embed, ErrorEmbed, } = require('./'),
    ms = require('ms'),
    moment = require('moment')

    class CandyBot extends Client {
        constructor (options) {
            super(options);
               
               this.config = require('./data/config')
               this.commands = new Collection();
               this.aliases = new Collection();
               this.events = new Collection();               // all this is just stuff we need to run
               this.cooldowns = new Collection();
               this.logger = require("./structures/logger");
               this.delay = util.promisify(setTimeout);
               this.resolve = require('./structures/resolvers');
               this.languages = require("../locales/language-meta.json");
               
    }

    async initialize() {
        
        await registerCommands(this, '../../commands');
        await registerEvents(this, '../../events');    // very important basically gets the events and commands so we can use them and then logs the bot in
        this.login(this.config.token);
    }
    
t(key, options){
        const language = this.translations.get('en-US');
        if (!language) throw "Invalid language set in data.";
        return language(key, options);
    }

    codeBlock(option, string) {
        string = (`\`\`\`${option}\n${string}\`\`\``) //CodeBlocks!! basically the ``` thing in discord
        return string
    }

    convertTime(time){

        if(!time) return
        const duration = ms(time) 
        return moment.duration(duration, "ms").humanize() // javascript uses milliseconds. this just basically "humanizes" it into seconds

    }

    randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; // Random One ;) lil bonus to get random num
    }
        
    
    


}

module.exports = CandyBot;