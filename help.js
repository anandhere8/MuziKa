const Discord = require('discord.js');
const config = require("./config.json");
const { prefix } = require("./config");

module.exports.help = function(message){
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Help Section',
        url: 'https://discord.js.org',
        author: {
            name: 'MūziKa',
            icon_url: 'https://static.dribbble.com/users/887237/screenshots/2832678/music.png',
            url: 'https://google.com',
        },
        description: 'MūziKa is a music bot',
        thumbnail: {
            url: 'https://i.pinimg.com/originals/5c/c7/70/5cc7702abc7c46969efc48d5d4cdf2d7.png',
        },
        timestamp: new Date(),
        footer: {
            text: 'Enjoy your day',
            icon_url: 'https://static.dribbble.com/users/887237/screenshots/2832678/music.png',
        },
    };
    
    message.channel.send({ embed: exampleEmbed });
}