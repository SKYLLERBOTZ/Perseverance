const fetch = require('node-fetch');
const moment = require('moment-timezone');

let handler = async (m, { text, reply }) => {
    const d = new Date();
    d.setTime(d.getTime() + 3600000); // Tambahkan 1 jam
    const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss');
if (!text) return reply('Example: siapa gw?');
        const prompt = `Halo, perkenalkan nama saya Asuma Asisten. Apakah namanya pasti? ✨ Hari ini adalah ${hariini}, pukul ${jam}.`;
try {
        const response = await fetch(`https://restapi.apibotwa.biz.id/api/gptlogic?message=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const gpt = await response.json();
        reply(gpt.data.response);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        reply("Maaf, terjadi kesalahan saat memproses permintaan.");
    }
};

handler.command = ["logic", "ai"];

module.exports = handler;