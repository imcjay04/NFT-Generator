const { Guild, Message, MessageEmbed } = require("discord.js");


Message.prototype.send = function(key, args) {
		return this.channel.send(key, args)
};


Message.prototype.error = function(key, args) {
    return this.channel.send(key, args)
};

Message.prototype.warn = function(key, args) {
    return this.channel.send(key, args)
};