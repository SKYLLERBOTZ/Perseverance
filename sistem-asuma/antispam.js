
//////SC INI Dijual !!!!   


////rizal - dev

//////083119115977

////.joingc https://chat.whatsapp.com/IWYixfay02cJwbzyo4XPH1

/////.joinch https://whatsapp.com/channel/0029Vaw0AGCEQIarHspllG1i

// Message Filter / Message Cooldowns
const usedCommandRecently = new Set()

const isFiltered = (from) => {
return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => {
return usedCommandRecently.delete(from)
}, 3000) // 3 detik
}

module.exports = {
antispam: { isFiltered, addFilter }
}