if (text?.toLowerCase() === '.menu') {
  await sock.sendMessage(msg.key.remoteJid, {
    image: { url: 'https://files.catbox.moe/e6k76s.jpeg' },
    caption: `🎮 *POKÉMENU - BOT COMMANDES* 🎮

🔹 .menu – Affiche ce menu
🔹 .rule – Règles Pokémon Unite
🔹 .pavé – Lancer un duel RP
🔹 .duel – Infos sur le mode duel RP
🔹 .tagall – Mentionne tous les membres du groupe

✧────────────────────✧
⚙️ Bot actif – prêt pour l'action !
🌀 Unite RP – Let's go !

BY WASUKE ❄️ D KAMADO VII`,
    footer: '🔥 Pokémon Unite Bot'
  }, { quoted: msg });
}
