const fs = require("fs")
const os = require('os');

//let handler = async (m, { Ditss, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, nomore, qkontak, asumaSaldo, ditsganteng, prefix, reply, text, pickRandom, replyAi }) => {
//let totalreg = Object.keys(db.list().user).length
let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime, toIDR, qkontak, asumaSaldo, ditsganteng, pickRandom, readmore, fetchJson, salam }) => {

const xmenu_oh = `
*\`乂 ABSEN M E N U 乂\`*
> ┌  ◦ *mulaiabsen* : 
> └  ◦ *absen* :
> ┌  ◦ *cekabsen* : 
> └  ◦ *hapusabsen* :

*\`乂 A I - M E N U 乂\`*
> ┌  ◦ *autoai* : on/off
> └  ◦ *ai* :
> ┌  ◦ *llama* : 
> └  ◦ *joko* :
> ┌  ◦ *aimusik* : 
> └  ◦ *gpt* :
> ┌  ◦ *ai-asuma* : 
> └  ◦ *logic* :

*\`乂 ANIME - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}cogan${ka}* :
> └  ◦ *${ki}${prefix}elaina2${ka}* :
> ┌  ◦ *${ki}${prefix}exo${ka}* :
> └  ◦ *${ki}${prefix}elf${ka}* :
> ┌  ◦ *${ki}${prefix}estetic${ka}* :
> └  ◦ *${ki}${prefix}kanna${ka}* :
> ┌  ◦ *${ki}${prefix}loli${ka}* :
> └  ◦ *${ki}${prefix}shota${ka}* :
> ┌  ◦ *${ki}${prefix}husbu${ka}* :
> └  ◦ *${ki}${prefix}sagiri${ka}* :
> ┌  ◦ *${ki}${prefix}shinobu${ka}* :
> └  ◦ *${ki}${prefix}megumin${ka}* :
> ┌  ◦ *${ki}${prefix}wallnime${ka}* :
> └  ◦ *${ki}${prefix}neko${ka}* :
> ┌  ◦ *${ki}${prefix}waifu${ka}* :
> └  ◦ *${ki}${prefix}kill${ka}* :
> ┌  ◦ *${ki}${prefix}pat${ka}* :
> └  ◦ *${ki}${prefix}lick${ka}* :
> ┌  ◦ *${ki}${prefix}bite${ka}* :
> └  ◦ *${ki}${prefix}yeet${ka}* :
> ┌  ◦ *${ki}${prefix}bonk${ka}* :
> └  ◦ *${ki}${prefix}wink${ka}* :
> ┌  ◦ *${ki}${prefix}poke${ka}* :
> └  ◦ *${ki}${prefix}nom${ka}* :
> ┌  ◦ *${ki}${prefix}slap${ka}* :
> └  ◦ *${ki}${prefix}smile${ka}* :
> ┌  ◦ *${ki}${prefix}wave${ka}* :
> └  ◦ *${ki}${prefix}blush${ka}* :
> ┌  ◦ *${ki}${prefix}smug${ka}* :
> └  ◦ *${ki}${prefix}glomp${ka}* :
> ┌  ◦ *${ki}${prefix}happy${ka}* :
> └  ◦ *${ki}${prefix}dance${ka}* :
> ┌  ◦ *${ki}${prefix}cringe${ka}* :
> └  ◦ *${ki}${prefix}highfive${ka}* :
> ┌  ◦ *${ki}${prefix}handhold${ka}* :
> └  ◦ *${ki}${prefix}akira${ka}* :
> ┌  ◦ *${ki}${prefix}akiyama${ka}* :
> └  ◦ *${ki}${prefix}ana${ka}* :
> ┌  ◦ *${ki}${prefix}asuna${ka}* :
> └  ◦ *${ki}${prefix}ayuzawa${ka}* :
> ┌  ◦ *${ki}${prefix}boruto${ka}* :
> └  ◦ *${ki}${prefix}chiho${ka}* :
> ┌  ◦ *${ki}${prefix}chitoge${ka}* :
> └  ◦ *${ki}${prefix}cosplayloli${ka}* :
> ┌  ◦ *${ki}${prefix}cosplaysagiri${ka}* :
> └  ◦ *${ki}${prefix}deidara${ka}* :
> ┌  ◦ *${ki}${prefix}doraemon${ka}* :
> └  ◦ *${ki}${prefix}elena${ka}* :
> ┌  ◦ *${ki}${prefix}emilia${ka}* :
> └  ◦ *${ki}${prefix}erza${ka}* :
> ┌  ◦ *${ki}${prefix}gremory${ka}* :
> └  ◦ *${ki}${prefix}hestia${ka}* :
> ┌  ◦ *${ki}${prefix}hinata${ka}* :
> └  ◦ *${ki}${prefix}husbu${ka}* :
> ┌  ◦ *${ki}${prefix}inori${ka}* :
> └  ◦ *${ki}${prefix}isuzu${ka}* :
> ┌  ◦ *${ki}${prefix}itachi${ka}* :
> └  ◦ *${ki}${prefix}itori${ka}* :
> ┌  ◦ *${ki}${prefix}kaga${ka}* :
> └  ◦ *${ki}${prefix}kagura${ka}* :
> ┌  ◦ *${ki}${prefix}kakasih${ka}* :
> └  ◦ *${ki}${prefix}kaori${ka}* :
> ┌  ◦ *${ki}${prefix}keneki${ka}* :
> └  ◦ *${ki}${prefix}kotori${ka}* :
> ┌  ◦ *${ki}${prefix}kurumi${ka}* :
> └  ◦ *${ki}${prefix}loli${ka}* :
> ┌  ◦ *${ki}${prefix}madara${ka}* :
> └  ◦ *${ki}${prefix}megumin${ka}* :
> ┌  ◦ *${ki}${prefix}mikasa${ka}* :
> └  ◦ *${ki}${prefix}mikey${ka}* :
> ┌  ◦ *${ki}${prefix}miku${ka}* :
> └  ◦ *${ki}${prefix}minato${ka}* :
> ┌  ◦ *${ki}${prefix}naruto${ka}* :
> └  ◦ *${ki}${prefix}neko${ka}* :
> ┌  ◦ *${ki}${prefix}neko2${ka}* :
> └  ◦ *${ki}${prefix}nekonime${ka}* :
> ┌  ◦ *${ki}${prefix}nezuko${ka}* :
> └  ◦ *${ki}${prefix}onepiece${ka}* :
> ┌  ◦ *${ki}${prefix}pokemon${ka}* :
> └  ◦ *${ki}${prefix}randomnime${ka}* :
> ┌  ◦ *${ki}${prefix}randomnime2${ka}* :
> └  ◦ *${ki}${prefix}rize${ka}* :
> ┌  ◦ *${ki}${prefix}sagiri${ka}* :
> └  ◦ *${ki}${prefix}sakura${ka}* :
> ┌  ◦ *${ki}${prefix}sasuke${ka}* :
> └  ◦ *${ki}${prefix}shina${ka}* :
> ┌  ◦ *${ki}${prefix}shinka${ka}* :
> └  ◦ *${ki}${prefix}shinomiya${ka}* :
> ┌  ◦ *${ki}${prefix}shizuka${ka}* :
> └  ◦ *${ki}${prefix}shota${ka}* :
> ┌  ◦ *${ki}${prefix}tejina${ka}* :
> └  ◦ *${ki}${prefix}toukachan${ka}* :
> ┌  ◦ *${ki}${prefix}tsunade${ka}* :
> └  ◦ *${ki}${prefix}waifu${ka}* :
> ┌  ◦ *${ki}${prefix}animewall${ka}* :
> └  ◦ *${ki}${prefix}yotsuba${ka}* :
> ┌  ◦ *${ki}${prefix}yuki${ka}* :
> └  ◦ *${ki}${prefix}yulibocil${ka}* :
> ┌  ◦ *${ki}${prefix}yumeko${ka}* :
> └  ◦ *${ki}${prefix}8ball${ka}* :
> ┌  ◦ *${ki}${prefix}tickle${ka}* :
> └  ◦ *${ki}${prefix}gecg${ka}* :
> ┌  ◦ *${ki}${prefix}feed${ka}* :
> └  ◦ *${ki}${prefix}Ditss${ka}* :

*\`乂 A S U P A N - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}asupan1-20${ka}* :
> └  ◦ *${ki}${prefix}tiktokgirl${ka}* :
> ┌  ◦ *${ki}${prefix}tiktoknukthy${ka}* :
> └  ◦ *${ki}${prefix}tiktokkayes${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokpanrika${ka}* :
> └  ◦ *${ki}${prefix}tiktoknotnot${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokghea${ka}* :
> └  ◦ *${ki}${prefix}tiktoksantuy${ka}* :
> ┌  ◦ *${ki}${prefix}tiktokbocil${ka}* :
> └  ◦ *${ki}${prefix}bokep1/27${ka}* :

*\`乂 BERITA M E N U 乂\`*
> ┌  ◦ *ꜰᴀᴊᴀʀ* : 
> └  ◦ *ᴄɴɴ* : 
> ┌  ◦ *ʟᴀʏᴀʀᴋᴀᴄᴀ* : 
> └  ◦ *ᴄɴʙᴄ* : 
> ┌  ◦ *ᴛʀɪʙᴜɴ* : 
> └  ◦ *ɪɴᴅᴏᴢᴏɴᴇ* : 
> ┌  ◦ *ᴋᴏᴍᴘᴀꜱ* : 
> └  ◦ *ᴅᴇᴛɪᴋɴᴇᴡꜱ* : 
> ┌  ◦ *ᴅᴀɪʟʏɴᴇᴡꜱ* : 
> └  ◦ *ɪɴᴇᴡꜱ* : 
> ┌  ◦ *ᴏᴋᴇᴢᴏɴᴇ* : 
> └  ◦ *ꜱɪɴᴅᴏ* : 
> ┌  ◦ *ᴛᴇᴍᴘᴏ* : 
> └  ◦ *ᴀɴᴛᴀʀᴀ* : 
> ┌  ◦ *ᴋᴏɴᴛᴀɴ* : 
> └  ◦ *ᴍᴇʀᴅᴇᴋᴀ* : 
> ┌  ◦ *ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ* : 
> └  ◦ *ɢᴇᴍᴘᴀɴᴇᴡꜱ* : 

*\`乂 CERPEN M E N U 乂\`*
> ┌  ◦ *${ki}cerpen ᴀɴᴀᴋ${ka}* :
> └  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ${ka}* :
> ┌  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ${ka}* :
> └  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ${ka}* :
> └  ◦ *${ki}cerpen ʙᴜᴅᴀʏᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇᴅɪʜ${ka}* :
> └  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ${ka}* :
> └  ◦ *${ki}cerpen ɢᴀʟᴀᴜ${ka}* :
> ┌  ◦ *${ki}cerpen ɢᴏᴋɪʟ${ka}* :
> └  ◦ *${ki}cerpen ɪɴꜱᴘɪʀᴀꜱɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴊᴇᴘᴀɴɢ${ka}* :
> └  ◦ *${ki}cerpen ᴋᴇʜɪᴅᴜᴘᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴋᴇʟᴜᴀʀɢᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴋɪꜱᴀʜɴʏᴀᴛᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴋᴏʀᴇᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴋʀɪꜱᴛᴇɴ${ka}* :
> ┌  ◦ *${ki}cerpen ʟɪʙᴜʀᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴍᴀʟᴀʏꜱɪᴀ${ka}* :
> ┌  ◦ *${ki}cerpen ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴍɪꜱᴛᴇʀɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴍᴏᴛɪᴠᴀꜱɪ${ka}* :
> └  ◦ *${ki}cerpen ɴᴀꜱɪʜᴀᴛ${ka}* :
> ┌  ◦ *${ki}cerpen ᴏʟᴀʜʀᴀɢᴀ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴀᴛᴀʜʜᴀᴛɪ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴᴀɴᴛɪᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇɴᴅɪᴅɪᴋᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴɢᴀʟᴀᴍᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇɴɢᴏʀʙᴀɴᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇɴʏᴇꜱᴀʟᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇʀᴊᴜᴀɴɢᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇʀᴘɪꜱᴀʜᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ${ka}* :
> └  ◦ *${ki}cerpen ʀᴀᴍᴀᴅʜᴀɴ${ka}* :
> ┌  ◦ *${ki}cerpen ʀᴇᴍᴀᴊᴀ${ka}* :
> └  ◦ *${ki}cerpen ʀɪɴᴅᴜ${ka}* :
> ┌  ◦ *${ki}cerpen ʀᴏʜᴀɴɪ${ka}* :
> └  ◦ *${ki}cerpen ʀᴏᴍᴀɴᴛɪꜱ${ka}* :
> ┌  ◦ *${ki}cerpen ꜱᴀꜱᴛʀᴀ${ka}* :
> └  ◦ *${ki}cerpen ꜱᴇᴅɪʜ${ka}* :
> ┌  ◦ *${ki}cerpen ꜱᴇᴊᴀʀᴀʜ${ka}* :

*\`乂 DOWNLOAD - M E N U 乂\`*
> ┌  ◦ *${ki}igdl${ka}* : 
> └  ◦ *${ki}play${ka}* :
> ┌  ◦ *${ki}ytmp3${ka}* : 
> └  ◦ *${ki}ytmp4${ka}* :
> ┌  ◦ *${ki}capcut${ka}* : 
> └  ◦ *${ki}tiktok${ka}* :
> ┌  ◦ *${ki}tiktokslide${ka}* : 
> └  ◦ *${ki}ttmp3${ka}* :
> ┌  ◦ *${ki}mediafire${ka}* : 
> └  ◦ *${ki}gdrive${ka}* :
> ┌  ◦ *${ki}threads${ka}* : 
> └  ◦ *${ki}videy${ka}* :
> ┌  ◦ *${ki}spotify${ka}* : 
> └  ◦ *${ki}gitclone${ka}* :

*\`乂 FUN - M E N U 乂\`*
> ┌  ◦ *${ki}cekkontol${ki}* :
> └  ◦ *${ki}cekganteng${ki}* :
> ┌  ◦ *${ki}cekcantik${ki}* :
> └  ◦ *${ki}cekmemek${ki}* : 
> ┌  ◦ *${ki}cekkhodam${ki}* : 
> └  ◦ *${ki}checkme${ki}* : 
> ┌  ◦ *${ki}kontol${ki}* :
> └  ◦ *${ki}cabul${ki}* : 
> ┌  ◦ *${ki}tolol${ki}* : 
> └  ◦ *${ki}sunda${ki}* :
> ┌  ◦ *${ki}goblog/goblok${ki}* : 
> └  ◦ *${ki}idiot${ki}* : 
> ┌  ◦ *${ki}gay${ki}* :
> └  ◦ *${ki}jomok${ki}* : 
> ┌  ◦ *${ki}bajingan${ki}* : 
> └  ◦ *${ki}munafik${ki}* :
> ┌  ◦ *${ki}kontol${ki}* :
> └  ◦ *${ki}yatim${ki}* : 
> ┌  ◦ *${ki}poke${ki}* : 
> └  ◦ *${ki}pembokep${ki}* : 
> ┌  ◦ *${ki}fembokef${ki}* :
> └  ◦ *${ki}pengocok${ki}* :
> ┌  ◦ *${ki}hitam${ki}* :
> └  ◦ *${ki}hytam${ki}* : 
> ┌  ◦ *${ki}bego${ki}* : 
> └  ◦ *${ki}jawa${ki}* : 
> ┌  ◦ *${ki}wibu${ki}* : 
> └  ◦ *${ki}stress${ki}* :
> ┌  ◦ *${ki}miskin${ki}* : 
> └  ◦ *${ki}cantik${ki}* : 
> ┌  ◦ *${ki}ganteng${ki}* :
> └  ◦ *${ki}setan${ki}* :
> ┌  ◦ *${ki}manis${ki}* :
> └  ◦ *${ki}babi${ki}* : 
> ┌  ◦ *${ki}cina${ki}* : 
> └  ◦ *${ki}atheis${ki}* : 
> ┌  ◦ *${ki}papua${ki}* :
> └  ◦ *${ki}pengentot${ki}* : 
> ┌  ◦ *${ki}seksi${ki}* : 
> └  ◦ *${ki}kawai${ki}* : 
> ┌  ◦ *${ki}tercindo${ki}* : 
> └  ◦ *${ki}cabul${ki}* :
> ┌  ◦ *${ki}fuckboy${ki}* : 
> └  ◦ *${ki}fuckgirl${ki}* :
> ┌  ◦ *${ki}playboy${ki}* : 
> └  ◦ *${ki}playgirl${ki}* :
> ┌  ◦ *${ki}sange${ki}* :
> └  ◦ *${ki}hot${ki}* :
> ┌  ◦ *${ki}sangean${ki}* : 

*\`乂 G R O U P - M E N U 乂\`*
> ┌  ◦ *${ki}tebakgambar${ka}* : 
> └  ◦ *${ki}tebakanime${ka}* :
> ┌  ◦ *${ki}tebakkabupaten${ka}* : 
> └  ◦ *${ki}tebaklagu${ka}* :
> ┌  ◦ *${ki}kuis${ka}* : 
> └  ◦ *${ki}tebakkalimat${ka}* :
> ┌  ◦ *${ki}tebakkata${ka}* : 
> └  ◦ *${ki}tebaklirik${ka}* :
> ┌  ◦ *${ki}tebakkimia${ka}* : 
> └  ◦ *${ki}tebakbendera${ka}* :
> ┌  ◦ *${ki}susunkata${ka}* : 
> └  ◦ *${ki}asahotak${ka}* :
> ┌  ◦ *${ki}siapakahaku${ka}* : 
> └  ◦ *${ki}caklontong${ka}* :
> ┌  ◦ *${ki}math${ka}* : 
> └  ◦ *${ki}family100${ka}* :
> ┌  ◦ *${ki}tebakjkt${ka}* : 
> └  ◦ *${ki}..${ka}* :

*\`乂 G R O U P - M E N U 乂\`*
> ┌  ◦ *getbio* :
> └  ◦ *getpp* :
> ┌  ◦ *on/off* :
> └  ◦ *kick* :
> ┌  ◦ *demote* : 
> └  ◦ *promote* :
> ┌  ◦ *open* : 
> └  ◦ *close* :
> ┌  ◦ *on 5* : 
> └  ◦ *jodoh* :
> ┌  ◦ *add* : 
> └  ◦ *afk* :

*\`乂 islam - menu 乂\`*
> ┌  ◦ *${ki}asmaulhusna${ki}* :
> └  ◦ *${ki}bacaansholat${ki}* :
> ┌  ◦ *${ki}audiosurah${ki}* :
> └  ◦ *${ki}ayatkursi${ki}* :
> ┌  ◦ *${ki}doaharian${ki}* :
> └  ◦ *${ki}niatsholat${ki}* :
> ┌  ◦ *${ki}quotesislami${ki}* :
> └  ◦ *${ki}doatahlil${ki}* :
> ┌  ◦ *${ki}jadwalsholat${ki}* :

*\`乂 NSFW - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}dlychan${ka}* :
> └  ◦ *${ki}${prefix}hana${ka}* :
> ┌  ◦ *${ki}${prefix}merial${ka}* :
> └  ◦ *${ki}${prefix}Mihye${ka}* :
> ┌  ◦ *${ki}${prefix}nanaqi${ka}* :
> └  ◦ *${ki}${prefix}NguyenXHuang${ka}* :
> ┌  ◦ *${ki}${prefix}Noname${ka}* :
> └  ◦ *${ki}${prefix}nude${ka}* :
> ┌  ◦ *${ki}${prefix}okita${ka}* :
> └  ◦ *${ki}${prefix}onlyfans${ka}* :
> ┌  ◦ *${ki}${prefix}onlyfansvid${ka}* :
> └  ◦ *${ki}${prefix}quan${ka}* :
> ┌  ◦ *${ki}${prefix}umekoj${ka}* :
> └  ◦ *${ki}${prefix}yoshinobi${ka}* :
> ┌  ◦ *${ki}${prefix}hentai${ka}* :
> └  ◦ *${ki}${prefix}hentaivid${ka}* :
> ┌  ◦ *${ki}${prefix}hneko${ka}* :
> └  ◦ *${ki}${prefix}nwaifu${ka}* :
> ┌  ◦ *${ki}${prefix}animespank${ka}* :
> └  ◦ *${ki}${prefix}gasm${ka}* :
> ┌  ◦ *${ki}${prefix}cuckold${ka}* :
> └  ◦ *${ki}${prefix}cum${ka}* :
> ┌  ◦ *${ki}${prefix}milf${ka}* :
> └  ◦ *${ki}${prefix}eba${ka}* :
> ┌  ◦ *${ki}${prefix}ero${ka}* :
> └  ◦ *${ki}${prefix}manga${ka}* :
> ┌  ◦ *${ki}${prefix}pussy${ka}* :
> └  ◦ *${ki}${prefix}tentacles${ka}* :
> ┌  ◦ *${ki}${prefix}yuri${ka}* :
> └  ◦ *${ki}${prefix}zettai${ka}* :

*\`乂 RANDOM - M E N U 乂\`*
> ┌  ◦ *${ki}${prefix}hijab${ka}* :
> └  ◦ *${ki}${prefix}indo${ka}* :
> ┌  ◦ *${ki}${prefix}confess *nomor|nama|pesan*${ka}* :
> └  ◦ *${ki}${prefix}menfess nomor|nama|pesan*${ka}* :
> ┌  ◦ *${ki}${prefix}japanese${ka}* :
> └  ◦ *${ki}${prefix}korean${ka}* :
> ┌  ◦ *${ki}${prefix}malay${ka}* :
> └  ◦ *${ki}${prefix}randomgirl${ka}* :
> ┌  ◦ *${ki}${prefix}randomboy${ka}* :
> └  ◦ *${ki}${prefix}thai${ka}* :
> ┌  ◦ *${ki}${prefix}vietnamese${ka}* :
> └  ◦ *${ki}${prefix}aesthetic${ka}* :
> ┌  ◦ *${ki}${prefix}chinese${ka}* :
> └  ◦ *${ki}${prefix}pubg${ka}* :
> ┌  ◦ *${ki}${prefix}antiwork${ka}* :
> └  ◦ *${ki}${prefix}blackpink2${ka}* :
> ┌  ◦ *${ki}${prefix}cosplay${ka}* :
> └  ◦ *${ki}${prefix}cat${ka}* :
> ┌  ◦ *${ki}${prefix}doggo${ka}* :
> └  ◦ *${ki}${prefix}justina${ka}* :
> ┌  ◦ *${ki}${prefix}kayes${ka}* :
> └  ◦ *${ki}${prefix}bike${ka}* :
> ┌  ◦ *${ki}${prefix}boneka${ka}* :
> └  ◦ *${ki}${prefix}kpop${ka}* :
> ┌  ◦ *${ki}${prefix}notnot${ka}* :
> └  ◦ *${ki}${prefix}car${ka}* :
> ┌  ◦ *${ki}${prefix}rose${ka}* :
> └  ◦ *${ki}${prefix}ryujin${ka}* :
> ┌  ◦ *${ki}${prefix}ulzangboy
> └  ◦ *${ki}${prefix}ulzanggirl${ka}* :
> ┌  ◦ *${ki}${prefix}mobilelegend${ka}* :

*\`乂 SEARCH - M E N U 乂\`*
> ┌  ◦ *tts* : 
> └  ◦ *yts* :
> ┌  ◦ *play* : 
> └  ◦ *wastalk* : (coming soon)
> ┌  ◦ *igstalk* : (coming soon)
> └  ◦ *ttstalk* : (coming soon)
> ┌  ◦ *kodepos* : 
> └  ◦ *cekcuaca* :
> ┌  ◦ *ai* : 
> └  ◦ *google* : 
> ┌  ◦ *vtuber* : 
> └  ◦ *kivotos* : 

*\`乂 SOUNDS - M E N U 乂\`*
> ┌  ◦ *sound1/161* : 
> └  ◦ *sound1  1/161* :
> ┌  ◦ *sad1/35* : 
> └  ◦ *sad1 1/35* :
> ┌  ◦ *music1/35* : 
> └  ◦ *music1 1/35* :

*\`乂 T O O L S - M E N U 乂\`*
> ┌  ◦ *${ki}faketweet${ka}* : 
> └  ◦ *${ki}twt${ka}* :
> ┌  ◦ *${ki}remini${ka}* : 
> └  ◦ *${ki}tourl${ka}* :
> ┌  ◦ *${ki}tourl2${ka}* : 
> └  ◦ *${ki}ssweb${ka}* :
> ┌  ◦ *${ki}nobg${ka}* : 
> └  ◦ *${ki}translate${ka}* :
> ┌  ◦ *${ki}qc${ka}* : 
> └  ◦ *${ki}tohd${ka}* :
> ┌  ◦ *${ki}shortlink${ka}* : 
> └  ◦ *${ki}shortlink2${ka}* :
> ┌  ◦ *${ki}enc${ka}* : 
> └  ◦ *${ki}enchard${ka}* :
> ┌  ◦ *${ki}vtuber${ka}* : 
> └  ◦ *${ki}infogempa${ka}* :
> ┌  ◦ *${ki}ceknik${ka}* : 
> └  ◦ *${ki}creatqr${ka}* :
> ┌  ◦ *${ki}toimg${ka}* : 
> └  ◦ *${ki}tovn${ka}* :
> ┌  ◦ *${ki}igstalk${ka}* : 
> └  ◦ *${ki}ttstalk${ka}* :
> ┌  ◦ *${ki}ffstalk${ka}* : 
> └  ◦ *${ki}mlstalk${ka}* :

*\`乂 CPANEL M E N U 乂\`*
> .cpanel namanya
> ┌  ◦ *${ki}panelmenu2${ka}* : 
> └  ◦ *${ki}listadmin${ka}* :
> ┌  ◦ *${ki}listpanel${ka}* : 
> └  ◦ *${ki}deladmin${ka}* :
> ┌  ◦ *${ki}delpanel${ka}* : 
> └  ◦ *${ki}cadmin${ka}* :
> ┌  ◦ *${ki}1gb${ka}* : 
> └  ◦ *${ki}2gb${ka}* :
> ┌  ◦ *${ki}3gb${ka}* : 
> └  ◦ *${ki}4gb${ka}* :
> ┌  ◦ *${ki}5gb${ka}* : 
> └  ◦ *${ki}6gb${ka}* :
> ┌  ◦ *${ki}7gb${ka}* : 
> └  ◦ *${ki}8gb${ka}* :
> ┌  ◦ *${ki}9gb${ka}* : 
> └  ◦ *${ki}unlimited${ka}* :

*\`乂 CPANEL2 M E N U 乂\`*

> ┌  ◦ *${ki}panelmenu${ka}* : 
> └  ◦ *${ki}listadmin-v2${ka}* :
> ┌  ◦ *${ki}listpanel-v2${ka}* : 
> └  ◦ *${ki}deladmin-v2${ka}* :
> ┌  ◦ *${ki}delpanel-v2${ka}* : 
> └  ◦ *${ki}cadmin-v2${ka}* :
> ┌  ◦ *${ki}1gb-v2${ka}* : 
> └  ◦ *${ki}2gb-v2${ka}* :
> ┌  ◦ *${ki}3gb-v2${ka}* : 
> └  ◦ *${ki}4gb-v2${ka}* :
> ┌  ◦ *${ki}5gb-v2${ka}* : 
> └  ◦ *${ki}6gb-v2${ka}* :
> ┌  ◦ *${ki}7gb-v2${ka}* : 
> └  ◦ *${ki}8gb-v2${ka}* :
> ┌  ◦ *${ki}9gb-v2${ka}* : 
> └  ◦ *${ki}unlimited-v2${ka}* :`

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
    fileName: `*\`乂 All MENU 乂\`*`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//bts
 caption: xmenu_oh,
 footer: `\npowered by ${global.namaOwner2}`,
 buttons: [
 {
 buttonId: ".inpoebot", 
 buttonText: {
 displayText: 'info bot'
 }
 }, {
 buttonId: ".aditt", 
 buttonText: {
 displayText: "contact owner"
 }
 }, 						
     {
							buttonId: `.botjelek`,
							buttonText: {
								displayText: "back menu awal"
							}
						},
						{
							buttonId: `.hsja`,
							buttonText: {
								displayText: "plerr kuda"
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
 title: `${global.namaOwner} | ${global.botname2}`,
 mediaType: 1,
 previewType: 1,
 body: `${salam} ${m.pushName}`,// artinya hak cipta
 //previewType: "PHOTO",
 thumbnail: fs.readFileSync('./source/media/menuowner.jpg'),
 renderLargerThumbnail: true,
 mediaUrl: global.linkGrup,
 sourceUrl: global.linkSaluran,
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idSaluran,
 serverMessageId: -1,
 newsletterName: `Menu By: ${global.namaOwner}`,
 }
 }
}, { quoted: qkontak });
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/musikk/main/randomm.json');

let itil = pler[Math.floor(Math.random() * pler.length)];
await Ditss.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })}


handler.command = ["allplerr", "allmenu", "asuma-all"]

module.exports = handler