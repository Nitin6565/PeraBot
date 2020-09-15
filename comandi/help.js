// Importo il file di config
const config = require("../config.json");

module.exports = {
  name: "help",
  description: "Comando di aiuto",
  args: true,
  execute(msg, args){
    // Importo il file dove ci sono le info di tutti i comandi
    let json = require('./help_file.json');
    let string = "";

    // Controllo che non ci siano troppi argomenti
    if(args.length > 1) msg.channel.send("Ci sono troppi argomenti");
    
    else if(args.length == 0){
      for(let i = 0; i < json.length; i++) {

        // Prendo ogni elemento di help_file e lo metto in string
        string += `
${config.prefix}${json[i].name}: ${json[i].description}
Argomenti necessari: ${json[i].args}
          `;
      }
    }else if(args.length == 1){
      for(let i = 0; i < json.length; i++) {

        // Cerco nel file il comando cercato
        if(json[i].name == args[0]){
          string += `
${config.prefix}${json[i].name}: ${json[i].description}
Argomenti necessari: ${json[i].args}
          `; 

          // Esco dal ciclo for quando viene trovato l'elemento
          break
        }
      }

      // Stampa un messaggio di errore nel caso non ci sia il comando cercato
      // ed esco dalla funzione
      if(!string.length){
        msg.channel.send(`Il comando ${args[0]} non esiste. Digita !help per maggiori informazioni sui comandi!`);
        return
      }
    }

    msg.channel.send(string);

  },
};
