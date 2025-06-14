if (text?.toLowerCase() === '.stats') {
  await sock.sendMessage(
    msg.key.remoteJid,
    {
      image: { url: 'https://files.catbox.moe/e6k76s.jpeg' },
      caption: `📊 *Statistiques de Dresseur* 📊

🎮 Dresseur : ${msg.pushName || "Inconnu"}
🥇 Victoires : 12
❌ Défaites : 4
🐾 Pokémon favori : Dracaufeu
💠 Niveau RP : Expert
🧬 Combats totaux : 16`
    },
    { quoted: msg }
  );
}
