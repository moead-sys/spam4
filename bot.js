const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("597573685892612128")
setInterval(function() {
channel.send(`potato potato i love potatobot spam 1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);