const { Embed, ErrorEmbed, WarnEmbed } = require("../index")
const logChannel = require("./logs");
const guild1 = require('../database/models/Guild')


async function sendWarnUser(client, reason, name, punishment, channel, givenBy, member, message, warnings, guild){
  

    const messageToSend = new Embed()
    .setTitle(`You have been Warned in ${message.guild} for ${"`"}${reason}${"`"}`)
    .setColor('#64a5ff')

    await member.send(messageToSend)
      
      
      const warnUser = new WarnEmbed()
         .setTitle(`@${member.tag} ` +  client.t("owners/commands:WARN_TITLE"))
         .setDescription(client.t("owners/commands:WARN") + "`"+reason+ "`"+`\nYou Now Have ${warnings} Warnings` )

      await message.send(warnUser)

      //add warn amount to ban using player database, warns++ increment and compare to guild amount to ban

      // if log channel is enabled in guild plugins
      logChannel(client, reason, name, punishment, givenBy, guild, channel);
    }

    module.exports = sendWarnUser