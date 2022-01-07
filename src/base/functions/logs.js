const { Embed }= require('../index')
const config = require('../data/config')
const guild1 = require('../database/models/Guild')

async function logChannel(client, log, username, punishment, givenBy, guild, channelName){
  
  if(guildFound.enableLog === false) return;
  if(!guildFound.logChannel) return;
  const logChannel = client.channels.cache.get(guildFound.logChannel);        //<<  change this to your log channel id
  if(!log) {log = "`REASON NOT GIVEN`"};
  const logEmbed = new Embed()
  .setTitle(username + client.t(` Was ${punishment} in #${channelName}`))
  .setDescription(`The reason was for ${log} and was given by ${givenBy}`)
  .setFooter("Logs Channel")
  .setColor('#64a5ff')
  


  await logChannel.send(logEmbed);
}

module.exports = logChannel;