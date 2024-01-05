require("dotenv/config");
const { Client, IntentsBitField } = require("discord.js");
const { OpenAI } = require("openai");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("I'm ready!");
});

const channelID = process.env.CHANNEL_ID.split(",");
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("!")) return;
  if (!channelID.includes(message.channel.id)) return;
  //   message.reply(`You said: ${message.content}`);
  let conversationLog = [
    { role: "system", content: "You are a friendly chatbot." },
  ];

  try {
    await message.channel.sendTyping();
    message.reply(`You said: ${message.content}`);
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
});

client.login(process.env.TOKEN);
