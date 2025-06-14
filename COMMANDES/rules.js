const { default: makeWASocket, useSingleFileAuthState } = require("@adiwajshing/baileys");
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveState);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (text?.toLowerCase() === '.rule') {
      // Réaction 👇
      await sock.sendMessage(msg.key.remoteJid, {
        react: {
          text: "👇",
          key: msg.key
        }
      });

      // Images à envoyer
      const images = [
        'https://files.catbox.moe/e6k76s.jpeg',
        'https://files.catbox.moe/bkmwba.png',
        'https://files.catbox.moe/2aq411.png',
        'https://files.catbox.moe/hwcbv3.png'
      ];

      for (const url of images) {
        await sock.sendMessage(
          msg.key.remoteJid,
          { image: { url }, caption: "📜 Règle Pokémon Unite" },
          { quoted: msg }
        );
      }
    }
  });
}
