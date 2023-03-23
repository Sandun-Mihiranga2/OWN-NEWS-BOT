/*



🗞️ 𝙽𝙴𝚆𝚂 𝙱𝙾𝚃 𝙱𝙴𝚃𝙰 🗞️ 


Bot by : Mr Nima
Helper : DarkAlpha
Esana scraper owner : Sisula

*/
const fs = require('fs')
const chalk = require('chalk')
const {sample} = require('lodash')

/**
 * Get text with color
 * @param  {String} text
 * @param  {String} color
 * @return  {String} Return text with color
 */
 const _color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
global.NEWS_ON = process.env.NEWS_ON || false
global.owner = ['94775512050']
global.no_block = ['94775512050','94715166712']
//global.delayy = 2000 
global.bot_number = '14242762536'
global.newsjid = '120363070389299957@g.us'
global.sessionName = 'session'
global.news_footer = `\n\n*Group Link ☛ https://chat.whatsapp.com/IvnbJyIhjBd4dEbZ1UvME6*\n\n 🇱🇰 *ꜱʟ ɴᴇᴡꜱ ᴜᴘᴅᴀᴛᴇ ᴄᴇɴᴛᴇʀ* 🇱🇰`
global.image_url = 'https://telegra.ph/file/9eabf9372eca9bacded28.jpg'
global.alive_message = 'මම නිවුස් බොටා ඉන්බොක්ස් ආවට වැඩක් නැ කිසිම කමාන්ඩ් 1ක් නැ'
global.sisula_code = '82darkalpha' 
global.inbox_block = false
global.sendalive = true
mess = {
	success: 'Done sir ✓',
	block: '⚠️ Inbox Block'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
