// Import modulo https
const https = require('https');

module.exports = {
  name: 'stat',
  description: 'Mostra le informazioni del server',
  execute(msg, args){
    
    // Faccio una richiesta di tipo get per avere il file JSON
    https.get("https://api.mcsrvstat.us/2/mc.perecraft.ml", (res) => {
      
      // Converto il responso in UTF-8
      res.setEncoding("utf8");
      
      res.on('data', (chunk) => {
        // Leggo il file JSON e lo metto in out
        let json = JSON.parse(chunk);

        let flagOnline = (json.online) ? "online" : "offline";
        /*
          if(out.online){
            let flagOnline = "online";
          }else{
            let flagOnline = "offline";
          }
         */

        msg.channel.send(
        `
ip: ${json.hostname}
players: ${json.players.online}/${json.players.max}
version: ${json.version}
status: ${flagOnline}
        `
        );
      })
    })
  },
};

