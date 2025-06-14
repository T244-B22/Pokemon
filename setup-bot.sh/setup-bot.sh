```js
const { makeWASocket, useSingleFileAuthState, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const { default: P } = require("pino");
const fs = require("fs");

const { state, saveState } = useSingleFileAuthState("./auth_info.json");

async function startBot() {
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    version,
    logger: P({ level: "silent" }),
    printQRInTerminal: true,
    auth: state,
  });

  sock.ev.on("creds.update", saveState);

  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (text?.toLowerCase() === "salut") {
      await sock.sendMessage(from, { text: "Yo, ici ton serviteur jeune dresseur 🤖" });
    }
  });
}

startBot();
```
sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            if((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
                startSock()
            } else {
                console.log('Session déconnectée, supprime auth_info.json et reconnecte.')
            }
        } else if(connection === 'open') {
            console.log('Connecté à WhatsApp!')
        }
    })

    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0]
        if(!msg.message || msg.key.fromMe) return
        const from = msg.key.remoteJid

        if(msg.message.conversation === 'pavé') {
            const response = `✧═══════[ PAVÉ ]═══════✧

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

*_🔸𝒫𝑜𝓀𝑒́𝓶𝑜𝓷 𝒰𝓃𝒾𝓉𝑒🎴🔸_*`

            await sock.sendMessage(from, { text: response })
            await sock.sendMessage(from, { react: { text: '🎮', key: msg.key } })
        }
    })
}

startSock()
EOF
