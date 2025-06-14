if (text?.toLowerCase() === '.tagall' && msg.key.remoteJid.endsWith('@g.us')) {
  const metadata = await sock.groupMetadata(msg.key.remoteJid);
  const participants = metadata.participants.map(p => p.id);

  await sock.sendMessage(
    msg.key.remoteJid,
    {
      text: '📢 Mention de tous les membres :',
      mentions: participants
    },
    { quoted: msg }
  );
}
