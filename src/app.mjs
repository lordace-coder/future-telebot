import { Telegraf, Markup } from "telegraf";
import express from "express";

const app = express();
app.use(express.json());
// Replace with your bot's API token
const bot = new Telegraf("7711875125:AAEdyyKHKQFdfA6QzQY6sp3gEZWEHwj386A");

// Basic /start command handler
bot.command("start", async (ctx) => {
  await ctx.reply(
    `Introducing Future Drop: the most exciting and rewarding airdrop of the year! 🚀

Get ready for a next-level experience as we unlock the doors to the future of crypto and rewards. With Future Drop, we’re not just giving you tokens—we’re giving you opportunities to grow, connect, and thrive in the decentralized world.

Imagine a future where your airdrop not only boosts your portfolio but opens doors to exclusive features, community benefits, and potential access to special projects. The possibilities are endless, and the rewards are tailored to empower YOU!

Why Future Drop?

    💎 Generous rewards for early participants
    🌐 Access to a growing and innovative ecosystem
    🔓 Unlock special community perks
    🚀 Be part of a visionary project shaping the future of decentralized finance

The future is bright, and it’s dropping right into your wallet. Don’t miss out on Future Drop—your ticket to the next wave of crypto rewards. The only question is: are you ready to step into the future?

Stay tuned, join the hype, and secure your spot!`,
    Markup.inlineKeyboard([
      Markup.button.webApp("Claim Airdrop", "https://futuredropz.vercel.app"),
    ])
  );
});

// Start the bot
bot
  .launch()
  .then((x) => console.log("polling"))
  .catch((err) => console.log(err));

// ! LAUNCH APP FROM EXPRESS JS

app.post("/", (req, res) => {
  bot
    .handleUpdate(req.body)
    .then(() => res.status(200).send("OK"))
    .catch((err) => {
      console.error("Error handling update:", err);
      res.status(500).send("Error");
    });
});
app.get("/", async (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  // Send raw HTML
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home Page</title>
      </head>
      <body>
          <h1>Welcome to the Vhagar telebot backend</h1>
         <a href ='${
           "https://api.telegram.org/bot7711875125:AAEdyyKHKQFdfA6QzQY6sp3gEZWEHwj386A/setWebhook?url=" +
           baseUrl.replace("http", "https") +
           "/"
         }'>set webhook</a>
      </body>
      </html>
    `);
});

// Start the server

app.listen(1000, async () => {
  // Set webhook URL dynamically using ngrok or other tunneling services
  console.log("app running on http://localhost:");
});
