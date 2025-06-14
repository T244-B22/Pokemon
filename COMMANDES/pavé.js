const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

const sock = makeWASocket({ auth: state });

sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

  if (text?.toLowerCase() === '<pavé>') {
    const pavé = `✧═══════[ PAVÉ ]═══════✧

🌀 DRESSEUR : [Nom]

┣━━━━━━━━━━━━━━━━━━━━┫    
💬 :  [Lancer de Poké Ball]

░░░░░░░░░░░░░░░░░░░░░

⚔ Séquence 1 :

↔️  

░░░░░░░░░░░░░░░░░░░░░

⚔ Séquence 2 :
       
↔️ 

✧═════[💥 Technique]════✧

🔄  [Nom de l’attaque]    

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

*_🔸𝒫𝑜𝓀𝑒́𝓂𝑜𝓃 𝒰𝓃𝒾𝓉𝑒🎴🔸_*`;

    await sock.sendMessage(msg.key.remoteJid, { text: pavé }, { quoted: msg });
  }
});

sock.ev.on('creds.update', saveState);
```
{
