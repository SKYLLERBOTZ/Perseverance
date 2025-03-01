const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore,fetchJson, prefix, sleep, salam, totalfitur}) => {

const xmenu_oh = `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *total pengguna :*  ${Object.keys(db.users).length}
> • total fitur:* ${totalfitur}
> • *command used :* ${db.users[m.sender].hitcmd}
> • *Limit :* ${db.users[m.sender].limit}
> • *saldo :* Rp ${asumaSaldo}
> • *device:* \`${m.device}\`

「 *S U B ∆ M E N U* 」
${readmore}
> ┌  ◦ *aimenu* : 
> └  ◦ *groupmenu* :
> ┌  ◦ *gamemenu* : 
> └  ◦ *rpgmenu* :
> ┌  ◦ *downloadmenu* : 
> └  ◦ *searchmenu* :
> ┌  ◦ *toolsmenu* : 
> └  ◦ *mainmenu* :
> ┌  ◦ *ownermenu* : 
> └  ◦ *absenmenu* :
> ┌  ◦ *cerpenmenu* : 
> └  ◦ *beritamenu* :
> ┌  ◦ *pterodactyl* : 
> └  ◦ *pterodactyl2* :
> ┌  ◦ *soundmenu* : 
> └  ◦ *animemenu* :
> ┌  ◦ *photomenu* : 
> └  ◦ *islammenu* :
> ┌  ◦ *randomphoto* : 
> └  ◦ *asupanmenu* :
> ┌  ◦ *nsfwmenu* : 
> └  ◦ *storemenu* :


╰──────────────━ `

const resize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
}

/*let deku = fs.readFileSync('./source/media/menu.jpg')
let get = await resize(deku, 100, 100)
await Ditss.sendMessage(m.chat, {
 document: fs.readFileSync('./case.js'), fileName: `${botname} ${versi}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,*/
Ditss.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: fs.readFileSync("./source/media/menu.jpg"),
    fileName: `${global.botname2}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//bts
 caption: xmenu_oh,
 footer: `\npowered by ${global.namaOwner2}`,
  buttons: [
  {
    buttonId: '.allmenu',
    buttonText: {
      displayText: 'Tampilkan Semua Menu📋'
    },
    type: 1,
  },
  {
    buttonId: '.asuma-list',
    buttonText: {
      displayText: 'Tampilkan Menu List'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'click here',
        sections: [
          {
            title: 'Ditss - 2025',
            highlight_label: 'terlaris✓',
            rows: [

              {
                header: 'Menu Populer 🐣',
                title: 'menampilkan menu populer',
                description: 'yang sering di pake banyak orang',
                id: '.menu-populer',
              },
              {
                header: 'Group Menu🐣',
                title: 'menampilkan menu grupp',
                description: 'yang di butuhkan para atmin grup.',
                id: '.asuma-group',
              },
                             {
                header: 'Game Menu🐣',
                title: 'menampilkan menu game',
                description: 'seru seruan bareng bot, capai saldo anda.',
                id: '.asuma-game',
              },
              {
                header: 'Rpg Menu🐣',
                title: 'menampilkan menu rpg',
                description: 'fitu ini akan hadir',
                id: '.asuma-rpg',
              },
              {
                header: 'Download Menu🐣',
                title: 'Menampilkan Menu Download',
                description: 'yang cepat dan canggih.',
                id: '.asuma-download',
              },
              {
                header: 'Jadibot menu 🐣',
                title: 'menampilkan menu jadibot',
                description: 'yang bisa jadi bot clone',
                id: '.asuma-jadibot',
              },
              {
                header: 'Bug Menu🐣',
                title: 'menampilkan menu Bug bot',
                description: 'virtek/bug bot',
                id: '.asuma-bug',
              },
              {
                header: 'Search Menu🐣',
                title: 'menampilkan menu search',
                description: 'yang canggih dan cepat',
                id: '.asuma-search',

              },
              {
                header: 'Tools Menu🐣',
                title: 'menampilkan menu tools',
                description: 'yang serba bisa dan unik',
                id: '.asuma-tools',
              },
              {
                header: 'Absen Menu🐣',
                title: 'menampilkan menu absen',
                description: 'fitur absen yang khusus Group',
                id: '.asuma-absen',
              },
              {
                header: 'Cerpen Menu🐣',
                title: 'menampilkan menu cerpen',
                description: 'cocok yang suka bacaa',
                id: '.asuma-cerpen',
              },
              {
                header: 'Berita Menu🐣',
                title: 'menampilkan menu berita',
                description: 'cocok yang sering baca/suka berita terbaru',
                id: '.asuma-berita',
              },
              {
                header: 'Sound Menu🐣',
                title: 'menampilkan menu sound',
                description: 'cocok yang sering dengerin musik',
                id: '.asuma-sound',
              },
              {
                header: 'Anime Menu🐣',
                title: 'menampilkan menu anime',
                description: 'cocok yang suka anime/waifu',
                id: '.asuma-anime',
              },
              {
                header: 'photo Menu🐣',
                title: 'menampilkan menu photo',
                description: 'cari photo idol',
                id: '.asuma-photo',
              },
              {
                header: 'Islam Menu🐣',
                title: 'menampilkan menu islami',
                description: 'cocok yang mau belajar surat"',
                id: '.asuma-islam',
              },
              {
                header: 'Asupan Menu🐣',
                title: 'menampilkan menu asupan',
                description: 'cuci mata🗿🥵',
                id: '.asuma-asupan',
              },
              {
                header: 'Nsfw Menu🐣',
                title: 'menampilkan menu nsfw',
                description: 'menu terlarang',
                id: '.asuma-nsfw',
              },
              {
                header: 'store Menu🐣',
                title: 'menampilkan menu store',
                description: 'buy di layanan bot yg di sediakan.',
                id: '.asuma-store',
              },
              {
                header: 'pterodactyl menu🐣',
                title: 'menampilkan menu pterodactyl',
                description: 'server 1',
                id: '.panelmenu',
              },
              {
                header: 'pterodactyl menu🐣',
                title: 'menampilkan menu pterodactyl',
                description: 'server 2',
                id: '.panelmenu2',
              },
              {
                header: 'Owner Menu🐣',
                title: 'menampilkan mennu owner',
                description: `khsus ${global.namaOwner}`,
                id: '.asuma-owner',
              },
              {
                header: 'HEADER',
                title: 'TITLE',
                description: 'DESCRIPTION',
                id: 'YOUR ID',
              },
            
              {
                header: 'HEADER',
                title: 'TITLE',
                description: 'DESCRIPTION',
                id: 'YOUR ID',
              },

            ],
          },
        ],
      }),
    },
  },
  ],
 viewOnce: true,
 headerType: 6,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: `${global.namaOwner} | ${global.botname2}`,
 mediaType: 1,
 previewType: 1,
 body: `${m.pushName}`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/menuowner.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: null,
 sourceUrl: null,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: ${namaOwner}`,
 }
 }
}, { quoted: null });
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
//await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })
await Ditss.sendMessage(m.chat, { audio: { url: itil}, mimetype: 'audio/mpeg', ptt: true,
  contextInfo: {
    mentionedJid: [m.sender],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idSaluran,
      newsletterName: `${salam} ${m.pushName}`,
      serverMessageId: 143
    }
  }
}, { 
  quoted: {
    key: { 
      fromMe: false, 
      participant: m.sender, 
      id: 'fake-msg-id' 
    },
    message: { 
      conversation: 'belajar menikmati proses tanpa harus protes.' 
    }
  }
})

}


handler.command = ["menu", "botjelek"]

module.exports = handler