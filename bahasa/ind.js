exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Nurul|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database manca-bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Nurulツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA MANCA BOT 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting! katanya:V`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `╭──━─── ❀۝❀ ───━──╮
=    *𝙄𝙉𝙁𝙊 𝙈𝘼𝙉𝘾𝘼 𝘽𝙊𝙏*   =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Nama: 𝙈𝘼𝙉𝘾𝘼-𝘽𝙊𝙏
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Version: 3.0
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Owner: 𝙉𝙐𝙍𝙐𝙇ツ
│ ♡ۣۜۜ፝͜͜͡͡✿➤ wa.me/6283815956151
│ 
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=       *𝙔𝙊𝙐𝙍 𝙄𝙉𝙁𝙊*       =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Nama: ${pushname}
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Uang mu : Rp${uangku}
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Nomer: ${sender.split("@")[0]}
│ ♡ۣۜۜ፝͜͜͡͡✿➤ XP: ${getLevelingXp(sender)}/${reqXp}
│ ♡ۣۜۜ፝͜͜͡͡✿➤ Level: ${getLevelingLevel(sender)}
│ ♡ۣۜۜ፝͜͜͡͡✿➤ User register : ${_registered.length} 
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=          *𝘼𝘽𝙊𝙐𝙏*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}info
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}snk
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lpr 
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}request
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}blocklist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ping
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}buypremium
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hargaprem
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}menupict
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}menuowner
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=     *𝙇𝙄𝙎𝙏 𝙊𝙁 𝙈𝙀𝙉𝙐*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfwloli
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}asupan
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wiki
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}spamcall
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tebakgambar
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}babi
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}caklontong
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katailham
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabijak
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fakta
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mimpi
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}husbu
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}imagemountain
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}loli
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}imagegame
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}imagecyberspace
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}imageislamic
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}blackpink
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomexo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randombts
│♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}menuownerwaifu
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=         *𝙀𝙋𝙃𝙊𝙏𝙊*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}goldplaybutton
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}silverplaybutton
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}shadow
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cup
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cup1
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}romance
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}smoke
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}burnpaper
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lovemessage
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}undergrass
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}coffe
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}woodheart
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}text2gif
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}flowerheart
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}woodenboard
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}summer3d
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nature3d
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wolfmetal
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hologram
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}underwater
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}golderrose
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}summernature
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}letterleaves
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}glowingneon
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fallleaves
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}flamming
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=          *𝙈𝘼𝙆𝙀𝙍*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nulis
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nulis2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nulis3
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nulis4
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sticker
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}stickergif
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}toimg
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hartatata
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hartatata2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hartatata3
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}text2gif
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tolol
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotemaker
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}galaxtext
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pupycut
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}galaxstyle
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hologram
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}textbyname
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}herrypoter
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}greanneon
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}logoepep
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}logoepep2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}logoepep3
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}logoepep4
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}logoepep5
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gamelogo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pornlogo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}metallogo
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=      *𝙊𝙏𝙃𝙀𝙍 𝙁𝙄𝙏𝙐𝙍*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ssweb
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hilih [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}alay [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}say [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wiki [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kbbi [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}map [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kalkulator
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lirik [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}brainly [teks]l
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bitly
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cuttly
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}meme
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}darkjoke
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tinyurl
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}shrtco
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}chord [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabijak 
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}faktaunik 
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}coronainfo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}holoh
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}halah
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}huluh
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}heleh
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hurufterbalik
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lirik
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}alay2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fml
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katadilan
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabucin
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabucin2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cerpen
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotes
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bacotanhacker
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotedoraemon
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infofilm
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}igvideo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pantun
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}artinama [teks]
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=       *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙎𝙄*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bahasa
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kodenegara
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infogempa
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infocuaca
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infonomor
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}covidindo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}covidglobal
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ceknamaff
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}namaninja
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ccgenerator
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}shrtco
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}newsinfo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tribunews
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tiktokstalk
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}igstalk
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nickff
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quran
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}foxnews
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}liputan6
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jadwalbola
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}film2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}film
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}newsinfo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}coronainfo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}github
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kurs
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cersex
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ceritahorror
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infofilm2
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}heroml
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}newsinfo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ceknamaml
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=     *𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽*     =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gantengcek
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cantikcek
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sangecek
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gaycek
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lesbicek
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}watak
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hobby
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}apakah
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kapankah
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bisakah
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bagaimanakah
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}rate
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=     *𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}1cak
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pinterest [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ytmp3 [link]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ytmp4 [link]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tiktoknowm [link]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}play [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fototiktok
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}igpost [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}igtv
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}joox [teks]
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=      *𝙁𝙄𝙉𝘿 𝙏𝙀𝙍𝙂𝙀𝙏*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mutual
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}next
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=     *𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙉𝙄𝙈𝙀*    =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}loli
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}neko
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}waifu
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}animecry
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}animehug
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}osakana
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}naruto
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}anime
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}husbu
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}animegirl
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}animeboy
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nekonime
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=     *𝙍𝘼𝙉𝘿𝙊𝙈 𝙆𝙋𝙊𝙋*     =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomkpop
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randombts
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomexo
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}blackpink
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=        *𝘾𝘼𝙍𝙏𝙊𝙊𝙉*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}doraemon
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pokemon
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=         *𝘼𝙉𝙄𝙈𝘼𝙇*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}anjing
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kucing
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hamster
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kelinci
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=       *𝙏𝙍𝘼𝙉𝙎𝙋𝙊𝙍𝙏*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mobil
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}motor
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sepeda
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=       *𝘼𝙀𝙎𝙏𝙃𝙀𝙏𝙄𝘾*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}aesthetic
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bluesky
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}flower
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}icecream
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pemandangan
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=        *𝙌𝙐𝙊𝙏𝙀𝙎*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotes
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quoteskehidupan
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotesislami
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabijak
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katailham
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotesnasehat
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotesmotivasi
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=   *𝙄𝙉𝙁𝙊 𝙇𝙄𝙈𝙄𝙏 𝙐𝘼𝙉𝙂*    =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}limit
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}buylimit
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}buypremiumlimit
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}transfer
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}leaderboard
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=         *𝙂𝙍𝙊𝙐𝙋*          =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}welcome [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfw [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}antilink [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}leveling [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nobadword [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}simih [1/0] 
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}promote [@tag]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}demote [@tag]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tagall
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}listadmin
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wakillist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}premiumlist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}banlist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}blocklist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}linkgc
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mining
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hidetag
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}grouplist
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}add [62]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kick [@tag]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setname
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setdesc
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setpp
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}listadmin
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}linkgc
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}leave
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mining
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}level
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}grup [buka/tutup)
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=        *𝙎𝙏𝙊𝙍𝘼𝙂𝙀*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}addsticker
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}getsticker
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}stickerlist
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}addvideo
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}getvideo
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}videolist
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}getimage
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}addImage
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}imagelist
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}addaudio
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}getaudio
│ ♡ۣۜۜ፝͜͜͡͡✿➤  ${prefix}audiolist
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=          *𝙎𝙊𝙐𝙉𝘿*         =
╰──━─── ❀۝❀ ───━──

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hai
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hallo [only computer]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}aine
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}soundplaydate [only computer]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}soundbakahentai [only computer]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sayonichan [only computer]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gtts
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=          *𝙒𝙄𝘽𝙐*           =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kusonime 
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}neonime
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wait
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=        *𝘼𝙋𝙇𝙄𝙆𝘼𝙎𝙄*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}apkpure [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}happymod [teks]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}moddroid [teks]
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=        *18+ 𝙉𝙎𝙁𝙒*        =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}blowjob
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomhentai
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sfw
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfw
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomsfw
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomnsfw
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfwneko
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=           *𝙁𝙐𝙉*           =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}truth
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}dare
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}slap
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tampar
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nangis
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cium
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}simi
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=         *𝙊𝙒𝙉𝙀𝙍*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setprefix
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setreply
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setppbot
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}block
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}unblock
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setprefix
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}leave
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kickall
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}event [1/0]
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bc
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bcgc
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}clone
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}clearall
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=          *𝙊𝙏𝙃𝙀𝙍*         =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}wame
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}qrcode
│ ♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}profile 
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐

╭──━─── ❀۝❀ ───━──╮
=      *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊𝙊*      =
╰──━─── ❀۝❀ ───━──╯

╭❑➤─| ─━─ ⊱✿⊰ ─━─ |─➤✿
│
│ ♡ۣۜۜ፝͜͜͡͡✿➤  𝙉𝙐𝙍𝙐𝙇ツ <dev>
│ ♡ۣۜۜ፝͜͜͡͡✿➤  𝙁𝘼𝘿𝙇𝙄 𝙓𝙋𝙇𝙊𝙄𝙏 <partner>
│ ♡ۣۜۜ፝͜͜͡͡✿➤  𝘿𝘼𝙑𝘼 𝙎𝘼𝙑 <partner>
│ ♡ۣۜۜ፝͜͜͡͡✿➤  𝙈𝙝𝙖𝙣𝙠𝘽𝙖𝙧𝘽𝙖𝙧 <sc ori>
│
╰❑➤─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➤✿°࿐
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6283815956151\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
