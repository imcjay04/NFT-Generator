const { MessageEmbed } = require('discord.js')
const config = require('../data/config')

/**
 * A MessageEmbed with the default fields already filled
 * @constructor
 * @param {object} [data] - Data to set in the rich embed
 */
module.exports = class Embed extends MessageEmbed {
  constructor (data = {}) {
    super(data)
    this.setColor(config.embeds.system.color)
  }
}