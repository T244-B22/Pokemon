if (text?.toLowerCase() === '.duel') {
  await sock.sendMessage(msg.key.remoteJid, {
    react: {
      text: "⚔️",
      key: msg.key
    }
  });

  const duelMessage = `✧═══════[ *DUEL☮️* ]══════✧
       *🔸 GAME - MODO 🎮◻️*
*══════════════════════*
*⛩️DISTANCE🔸: 6m*
*🏟️ARENA🔸:*
*🔻LATENCE: 7min🔸*
*══════════════════════*
*rules 💢 :*

🚫 Ne pas dévaloriser le verdict d'un modérateur sans preuve concrète. Sinon, amende + défaite immédiate du duel.

⛔ Aucun pavé ne sera validé après les 7 min + 1 min de temps additionnel.

♻️ En cas d'urgence, un temps mort de 10 min est autorisé. Sinon, forfait ou arrangement avec modo + adversaire.

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

   *🔶POKEMON UNITE 🎴🎮*

✧═══════[ *GAME🎮* ]══════✧`;

  await sock.sendMessage(msg.key.remoteJid, {
    text: duelMessage
  }, { quoted: msg });
}
```
