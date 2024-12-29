require('dotenv-safe').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello Telegram!');