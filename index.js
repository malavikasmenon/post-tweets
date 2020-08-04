let Twit = require('twit');
let config = require('./config.js');
const PromptSync = require('prompt-sync');
let prompt = require('prompt-sync')();

console.log("The bot is starting");

let T = new Twit(config);

let tweet = prompt('What do you want to tweet?');


T.post('statuses/update', { status: tweet }, tweeted);
//defining the callback function
function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Success: ' + data.text);
        //console.log(response);
    }
}