module.exports = class Command {
    constructor(name, description, aliases, moderatorOnly, cooldown, ownerOnly) {
      this.name = name;
      this.description = description;
      this.aliases = aliases;
      this.moderatorOnly = moderatorOnly;
      this.cooldown = cooldown;
      this.ownerOnly = ownerOnly;
    }
  } // Your command stuff