const mineflayer = require('mineflayer');
function startBot(){
 const bot = mineflayer.createBot({
   host: 'FORNEX4571.aternos.me',
   port: 56599,
   username: 'FOUREX_24JAM',
   version: false
 });
 bot.on('spawn', ()=>{
   console.log('BOT KEBAL ON!');
   bot.chat('/god');
   setInterval(()=>{ bot.swingArm(); }, 40000);
 });
 bot.on('end', ()=> setTimeout(startBot, 10000));
 bot.on('error', ()=> setTimeout(startBot, 10000));
}
startBot();
