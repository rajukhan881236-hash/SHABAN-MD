const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01FWW91ZE4wVHVuazlNUHNlM3MyYUFrbzF6YmYyNFIveVdXM1JNb3ZuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3lZdnlnUG94ME1pVTUvZW94ckhaWDU4QzJCTXhpdWlGY1JMbTY1QkJBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Skk2YlBMZWZMUytmazR2aHIzQktIT21pTkNLOHFGc0RRam1aVlE0MkhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Sm40QkZPQ1hvTlZsTkphVmgwc2dZejRKOStZQTFtOVRra0tGVzQ2aWdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NMFBxdTA0Q3NQVWdJRFE2Q1FCQnEzcEVWKzNtcitxN2RvdU4vNUEybUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE1anpmKzFnOVZJS0tJa1o2cUdXZ0k1U3BXa0JhMmhKR2hlcE1jWHI4ekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUVEbWZoSWFTMStZZDduLzR4TXNMblJ4THd3SDVmYUFDN2UwM1gwUmZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzJqNkJ2cGdtQ2M1ZjZJME44OTBxdDVweEVyaUZyaTlUV29wVmtPYml4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkU2VONk9LMVJTMVBVSUsvYmo5NVROUXlqdDRxc0d6M0pyL0k2YzVGTEVLcG5RQ3BXM2RaNTBiRlZGRDZOM1lMUWlIVjZMYjlydk9HUU9RT0ZLU0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJleGJBaFBUUEZMeGxPeE5Ga2ZmTkQ3Y3V5RzYvZHpWNXFqczBvS3hZN2VnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODk3MjQyODYzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzI2Q0MwQjA5RTI4MUExOTBFMDlDQUE3QjY1MTIzNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNDA1NjE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg5NzI0Mjg2MzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFRTQ0QjdCOUFCOTMwNjZGMDdFNUVBNzI3NDkxNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTQwNTYxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNUFGTVdBNjQiLCJtZSI6eyJpZCI6IjkxODk3MjQyODYzODoxM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk3NzE1NDcyMDc2ODYxOjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHVqaHB3REVLblY4OGNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidGpSbHhwdHRpaTJJSStOQUhjaUhiM2E1eGZlS3VmU21ncnA5eVNZcXZFdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDVhZWIzckUzcGV1WG9zR0RHVXd4eUk4bUdjQ3o5STF0a05GRWlDMU4ybi9sanVBa3lPWlV0ZisrWWZOemprNGRqaHRsazlPcTVCb0p5YlNZMkkrQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IndDc0ZVZTRXcERlMkFpeFgrY2s3ZElyZk5IdEJBUUlkNlN2ZVMyZmxiSndpcU9nNGNnMi9UTW4rL3ZEZXZPaGM2R2p6NTlFU3NtL3NmOHRBbHZ2SENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4OTcyNDI4NjM4OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJZMFpjYWJiWW90aUNQalFCM0loMjkydWNYM2lybjBwb0s2ZmNrbUtyeE0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTQwNTYxMiwibGFzdFByb3BIYXNoIjoiMk1GS1BRIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKdC8ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "918972428638",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env. Private_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918972428638",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
