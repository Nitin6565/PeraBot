module.exports = {
  name: 'rules',
  description: 'Mostra le regole',
  execute(msg, args){
    msg.channel.send(
    `
Regolamento generale:
    - Non fingersi parte dello staff.
    - Non chiedere ripetutamente di entrare nello staff o di ottenere vantaggi aggiuntivi.
    - Evitare spam o flood in chat (anche chat privata).
    - Non insultare il server o intraprendere atti ostili (come hacking, uso di spambot, furto di account, etc.).
    - Vietato condividere dati sensibili come password, email, numeri di telefono etc.
    - Vietati insulti diretti, minacce e discriminazione.
    - Vietato pubblicizzare altri server e relativi social.
    - Non segnalare gli utenti senza motivo.

Maggiori informazioni su <https://wikipera.ml/wiki/Regolamento>
    `
    );
  },
};
