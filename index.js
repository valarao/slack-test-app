const SlackBot = require('slackbots');
const axios = require('axios');
require('dotenv').config();

const bot = new SlackBot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'test_app',
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    };

    bot.postMessageToChannel(
        'general',
        'Get Ready To Laugh With @Jokebot!', 
        params
    );
});

bot.on('error', (err) => console.log(err));

bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

function handleMessage(message) {
    console.log(message);
    if (message.includes(' chucknorris')) {
        chuckJoke();
    }
}

function chuckJoke() {
    axios.get('https://api.icndb.com/jokes/random')
        .then(res => {
            const joke = res.data.value.joke;

            const params = {
                icon_emoji: ':laughing:'
            };
        
            bot.postMessageToChannel(
                'general',
                `Chuck Norris: ${joke}`, 
                params
            );
        })
}