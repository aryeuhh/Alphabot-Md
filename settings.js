const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

//OpenAi || ChatGpt
global.OpenAIKey = "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" //login to https://beta.openai.com/ to get apikey

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// beli apikey premium pc wa: 0887435047326
// beli apikey premium pc wa: 0887435047326
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'QvVfsU6r', // 👉 login https://api.zeeoneofc.my.id to get apikey
}
global.sewabotnya = `
edit sewabot di file settings.js line 19
`
// setting 
global.firtsChat = true //send firts message to new user
global.autoread = true // auto read message
global.antidelete = false // anti delete
global.antiviewonce = true // anti view once
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = true //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot
//global.language = english // use this for English language
//global.language = spanyol // use this for Spanyol language

// Other
// Other
global.botname = "ArxDip-Bot" //namabot kalian
global.ownername = "Aryeuhh" //nama kalian
global.myweb = "wa.me/6289652707119" //bebas asal jan hapus
global.youtube = "https://instagram.com/ary.dprj?igshid=YmMyMTA2M2Y=" //bebas asal jan hapus
global.myweb2 = "wa.me/6281511393216" //bebas
global.email = "officialary606@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone list : https://www.php.net/manual/en/timezones.php 
global.premium = ['62887435047326'] //premium user
global.owner = ["6289652707119", "6281511393216"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6289652707119" // nomor wa kalian
global.ownernomerr = "+6281511393216" //nmr wa kalian
global.thumbnail = "./image/_20230307_223459.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/no_markReactNative-snapshot-imag.png" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/edca4b513ddf29fd52c0e.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = '© ArxDip-Bot' //sticker wm ubah
global.author = 'Di Buat Oleh Aryeuhh' //sticker wm ganti nama kalian
global.sessionName = 'session'
//type menu for menu
global.typemenu = 'document' //
//type menu for downloadmenu, animemenu, etc
global.typemenu2 = 'templateImage' //
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}
global.buttonDefault = [{
   urlButton: {
      displayText: 'Youtube Channel',
      url: youtube
   }
}, {
   urlButton: {
      displayText: 'Website',
      url: myweb
   }
}, {
   quickReplyButton: {
      displayText: '🏓 Ping',
      id: '.ping'
   }
}, {
   quickReplyButton: {
      displayText: 'Owner 👤',
      id: 'owner'
   }
}, {
   quickReplyButton: {
      displayText: '⚡ Command ⚡',
      id: '.command'
   }
}]
global.buttonDefault2 = [{
   urlButton: {
      displayText: 'Youtube Channel',
      url: youtube
   }
}, {
   urlButton: {
      displayText: 'Website',
      url: myweb
   }
}, {
   quickReplyButton: {
      displayText: '🏓 Ping',
      id: '.ping'
   }
}, {
   quickReplyButton: {
      displayText: 'Owner 👤',
      id: 'owner'
   }
}, {
   quickReplyButton: {
      displayText: '🎁 Donasi 🎁',
      id: '.donasi'
   }
}]
global.buttonDefault3 = [{
      buttonId: `.owner`,
      buttonText: {
         displayText: '🙍‍♂️ Owner'
      },
      type: 1
   },
   {
      buttonId: `.donasi`,
      buttonText: {
         displayText: 'Donation 💰'
      },
      type: 1
   }
]
global.buttonDefault4 = [{
   buttonId: '.command',
   buttonText: {
      displayText: '༺ Back'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner ༻'
   },
   type: 1
}]
global.adventureRPG = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg'
global.bankRPG = 'https://telegra.ph/file/ce47dca98cfdb34162abb.png'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/507395e2edbd1d740a0fd.png'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐱',
         dog: '🐶',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Done, Oke Desu~',
   admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
   botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
   owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
   group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
   private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: '⏳ Sedang Di Proses',
   lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
   example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
