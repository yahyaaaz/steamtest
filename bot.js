const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`happy new year rex isthe best `,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});







client.login("NTI5NjQ2NTcwOTgzOTE1NTUx.Dwz5lQ.18Dx7KcT-FeQnVnZBQgeFqtDjk8");
