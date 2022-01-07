const guild1 = require('./models/Guild');
const config = require('../data/config');
const languages = require('../../locales/language-meta.json')
const member1 = require('./models/Members')

class Database extends Client {
    constructor (options) {
        super(options);
    }

    async saveGuild(guild){
    const newGuild = new guild1({
        id: guild.id,
        name: guild.name,
        prefix: config.prefix,
        embedColour: '#FF9DCE',
        language: languages.find((l) => l.default).name,
        enabled: false,
        roleName: 'NOT SET',
        Reaction: 'NOT SET',
        enableLog: false,
        logChannel: 'NOT SET',
        warnsToBan: '50',
        antiSwear: false,
        muteRole: 'NOT SET',
        moderatorRole: 'NOT SET',
        welcome: false,

        verification: {
          channelID: 'NOT SET',
          messageID: 'NOT SET'
       },
       invite: { 
        channelID: 'NOT SET',
        messageContent: "Welcome to <server> <serverCount>",
    }
    }); await newGuild.save();
};

    async saveMember(member){
        const newMember = new member1({
            memberID: member.id,
            displayName: member.username,
            rank: 0,
            xp: 0,
            points: 0,
            warnings: 0,
            plugins: {       
                banned: {
                enabled: null,
                reason: null,
            }
        },
    }); await newMember.save()
    }

};

module.exports = Database