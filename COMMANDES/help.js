if (text?.toLowerCase() === '.help') {
  await sock.sendMessage(msg.key.remoteJid, {
    image: { url: 'https://files.catbox.moe/e6k76s.jpeg' }, // image du menu
    caption: `✧═══════[ *AIDE - COMMANDES* ]══════✧

.menu - Affiche le menu principal  
.rule - Montre les règles du groupe  
.duel - Lance le mode duel avec les règles  
.team - Affiche les équipes disponibles  
.pavé - Envoie le pavé de jeu personnalisé  

BY WASUKE ❄️ D KAMADO VII`
  }, { quoted: msg });

  // Réaction emoji en réponse
  await sock.sendMessage(msg.key.remoteJid, {
    react: { text: "❓", key: msg.key }
  });
}
