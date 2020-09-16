// Import modulo https
const https = require('https');

module.exports = {
  name: 'stat',
  description: 'Mostra le informazioni del server',
  execute(msg, args){
    let string = "";
    
    // Faccio una richiesta di tipo get per avere il file JSON
    https.get("https://api.mcsrvstat.us/2/mc.perecraft.ml", (res) => {
      
      // Converto il responso in UTF-8
      res.setEncoding("utf8");

      res.on('data', (chunk) => {
        // Prendo ogni chunk per poi passato a JSON.parse()
        string += chunk;
      })
      
      res.on('end', () => {
        // Leggo il file JSON
        try{
          let json = JSON.parse(string);
        }catch (err){
          console.log(err);
          msg.channel.send("C'è stato un errore alla lettura del file, siete pregati di segnalare l'errore.");
        }

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
    }).on("error", (err) => {
      msg.channel.send("C'è stato un errore interno, siete pregati di segnalare l'errore.");
    });
  },
};

