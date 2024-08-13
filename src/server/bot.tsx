import TelegramBot from 'node-telegram-bot-api';

const token = '7234389294:AAH-G8DjcTzTNrh2GfiiwXp_DxfVm7QDCMc'; // Replace with your bot token
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const user = msg.from;
  console.log(`Received message from ${user?.username} (${user?.id}): ${msg.text}`);

  bot.sendMessage(chatId, `Hello ${user?.first_name}, you said: ${msg.text}`);
});