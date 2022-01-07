const Command = require("../../base/structures/Command");
const { Embed, ErrorEmbed } = require("../../base/index")
const Canvas = require('canvas')
const fs = require('fs')
const Discord = require('discord.js')
const path = require('path');
const fileName = './amount.json';
const file = require(fileName);



module.exports = class TestCommand extends Command {
    constructor() {
      super('generate', 'Use this to send a Fixed Embed to a channel', ['gen', 'Gen', 'Generate'], false , 3, true);
    }


    

    async run(client, message, t, author, args) {

      const layerdir = ['background', 'body', 'clothing', 'head', 'face', 'mouth', 'eyes1', 'hair', 'teeth', 'outlines', 'eyes2'];
// start code here
      
    }
  }
