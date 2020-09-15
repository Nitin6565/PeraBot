/*
 * ~ PeraBot ~
 *
 * Descrizione: Bot discord di PereCraft
 * Licenza: GPL3
 * Autori: Team di PereCraft
 */

// Importo i moduli
const config = require('./config.json'); // File di config
const discord = require('discord.js');
const fs = require('fs');

// Leggo i file dei comandi
const files = fs.readdirSync('./comandi').filter(file => file.endsWith('.js'));

// Crea un client di Discord
const client = new discord.Client();
client.commands = new discord.Collection();

// Importo tutti i comandi del bot
for (const file of files) {
  const cmd = require(`./comandi/${file}`);
	client.commands.set(cmd.name, cmd);
}

client.on('message', (msg) => {
  // Controllo se il messaggio ha il prefisso del comando
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  // Prendo il contenuto e controllo se è un comando
  const contenuto = msg.content.slice(config.prefix.length).trim().split(/ +/);
  const cmdExec = contenuto.shift().toLowerCase();

  try{
    client.commands.get(cmdExec).execute(msg, contenuto);
  }catch(error){
    msg.channel.send("Comando non trovato, guarda la lista con !help");
  }

})

// Login del bot
client.login(process.env.TOKEN);
