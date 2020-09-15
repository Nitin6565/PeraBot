module.exports = {
  name: 'info',
  description: 'Mostra le informazioni sul PeraBot',
  execute(msg, args){
    msg.channel.send(
    `
Se vuoi contribuire allo sviluppo della PeraBot puoi farlo a questo link:
https://github.com/PereCraft/PeraBot
    `
    );
  },
};
