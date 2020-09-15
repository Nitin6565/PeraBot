module.exports = {
  name: 'link',
  description: 'Mostra i link correlati a PereCraft',
  execute(msg, args){
    msg.channel.send(
    `
Sito web: <https://www.perecraft.ml>
Wikipera: <https://www.wikipera.ml>
Github: <https://github.com/PereCraft>
    `
    );
  },
};
