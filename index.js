const SlackBot = require('slackbots');
const axios = require('axios');
require('dotenv').config();

const bot = new SlackBot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'jokebot',
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    };

    bot.postMessageToChannel('general', 'Get Ready To Laugh With @Jokebot!', params);
});

console.log(process.env.SLACK_BOT_TOKEN);