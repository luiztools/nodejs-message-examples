const venom = require('venom-bot');

venom
    .create({
        session: 'session-name' //name of session
    })
    .then((client) => start(client))
    .catch((error) => console.log(error));

function start(client) {
    client.sendText("XXXXXXXXXXX@c.us", "Hello World")
        .then((result) => console.log('Result: ', result))
        .catch((error) => console.error('Error when sending: ', erro));
}