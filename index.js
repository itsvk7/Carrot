import { Client, Collection } from "discord.js";
import TwinDB from "twin-db";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.commands = new Collection();
client.database = {
  users: new TwinDB("users"),
  guilds: new TwinDB("guilds"),
};

client.login(process.env.TOKEN);

export default client;

for (const subFolder of fs.readdirSync("commands")) {
  for (const cmd of fs.readdirSync(`commands/${subFolder}`)) {
    const { default: command } = await import(`./commands/${subFolder}/${cmd}`);

    client.commands.set(command.name, command);
    console.log(`${command.name} Carregado!`);
  }
}

for (const event of fs.readdirSync("events")) {
  const { default: eventData } = await import(`./events/${event}`);

  client.on(eventData.name, (...args) => eventData.run(client, ...args));
}
