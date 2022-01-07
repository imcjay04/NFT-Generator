
const path = require('path');
const fs = require('fs').promises;
const BaseCommand = require('./Command');
const BaseEvent = require('./Event');
async function registerCommands(client, dir = '') {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
    if (file.endsWith('.js')) {
      const Command = require(path.join(filePath, file));
      if (Command.prototype instanceof BaseCommand) {
        const cmd = new Command();
        client.commands.set(cmd.name, cmd);
        cmd.aliases.forEach((alias) => {
          client.commands.set(alias, cmd);
          
         });
      }
    }
  } //Maybe the most boring file. Gets all the commands and events and aliases and all that stuff and makes it nice and easy to fetch
}

async function registerEvents(client, dir = '') {
  try {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerEvents(client, path.join(dir, file));
    if (file.endsWith('.js')) {
      const Event = require(path.join(filePath, file));
      if (Event.prototype instanceof BaseEvent) {
        const event = new Event();
        client.events.set(event.name, event);
        client.on(event.name, async (...args) => {
          event.run(client, ...args)
          })
      }
    }
  }
} catch (e) {
  client.logger.error(e)
}
}

module.exports = { 
  registerCommands, 
  registerEvents,
};