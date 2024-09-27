let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Mickey`.trim(), m)
};
handler.help = ["Mickey"];
handler.tags = ["internet"];
handler.command = /^(Mickey)$/i;
export default handler;

global.pack = [
  "https://qu.ax/wepw.jpg",
  "https://qu.ax/rKie.jpg",
  "https://qu.ax/LTzg.jpg",
  "https://qu.ax/WMjp.jpg",
];

handler.limit = 3;