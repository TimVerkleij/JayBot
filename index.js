const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
 console.log('Ready!');
});


client.login
(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log("Active")

  setInterval(() => {
    const statuses = [
      'Follow Jay on twitch',
      'JayTheCoug'
    ]

    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: "PLAYING" })
  }, 5000)
})





client.on('message', message => {
  if(message.content === '$twitch'){
  message.channel.send('Jays twitch is JayTheCoug');
  }else if(message.content === '$info'){
    message.channel.send('This server is for Jays community!');
  }else if(message.content === '$help'){
    message.channel.send('IF you need help or have any questions ping or dm the mods!');
  }else if(message.content === 'hi'){
    message.channel.send('Hello!');
  }else if(message.content === 'prefix'){
    message.channel.send('our prefix for all of our commands is $');
  }
  });