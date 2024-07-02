const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_17_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktSVWtvaGFFUUc4TWNPV3M0d2hPQ0lNSDM0YW1wWnR6L1lJT2czMktmd0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExNDk1ODc5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkZCOTVFMzZEMzY0OTAxQTQwRTRBMDFBOUVGODhCRDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODgzMDM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExNDk1ODc5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzhBODkwRkJGMzRFOTZDRDkxMjBDQUQ1QzY4Qzg2MDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODgzMDM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpzQlFmeUNyUnJLSTFDLXFsZlNoeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGJhZjRjNjctMWVmZS00MjRjLWEyZTctYzZhOWY0ODE3YTg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDE0NSxcbiAgICAgIDg4LFxuICAgICAgMTEsXG4gICAgICAyMDksXG4gICAgICAyNDQsXG4gICAgICAyMDgsXG4gICAgICAxNDQsXG4gICAgICAyOSxcbiAgICAgIDIyNSxcbiAgICAgIDM5LFxuICAgICAgMjM1LFxuICAgICAgMTUwLFxuICAgICAgMjA1LFxuICAgICAgMTA4LFxuICAgICAgNTQsXG4gICAgICAxMjAsXG4gICAgICA1MCxcbiAgICAgIDE3OCxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMjA4LFxuICAgICAgMTY3LFxuICAgICAgMTAyLFxuICAgICAgMTczLFxuICAgICAgMixcbiAgICAgIDEyMyxcbiAgICAgIDEzNyxcbiAgICAgIDExOCxcbiAgICAgIDI1NCxcbiAgICAgIDIxMSxcbiAgICAgIDE4MSxcbiAgICAgIDgyLFxuICAgICAgOTksXG4gICAgICA4OSxcbiAgICAgIDI5LFxuICAgICAgOTgsXG4gICAgICAxMzYsXG4gICAgICAxMTgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUE1rS2tDRUplcWpiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkIyRnJ5N2ladUphMnltM1Rxb2dWbEFLLzJSdE9QMGl2bnRRcG0wWmZRRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicitPY0hFM0N0d2lDSHlHYy9NZUxSZm9jK0l2ekZFak9FbVhFT2h1SW5jNERwdkoyRTVNZVFqaEd0a1pCeHNrTXowc3lXWEMxSWVOamx2YkdlV2I4QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUhaOVRmTWlib0RYQlJZNmxUd0hVb25FQXJYV3JZNTJadW5SOHNWL2tPMVpmTXBpUkNNbzNKU01FS0wwQzVTM252OW5aUnl4bVlFMDJjQllRdk8xaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE0OTU4Nzk1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0MDQ3MzUxODk4MjY3OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWnViYnlcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQ5NTg3OTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg4MzAzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZRVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlFWLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkpBWjJlQ3BKbGZ5YWFFcmZJRENqcVhHV0VyelhIRXVXdVhDSUJSRFpRYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjMxMjYwODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
