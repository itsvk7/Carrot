import { Client, Collection } from "discord.js";
import TwinDB from "twin-db";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: 3276799 });

client.commands = new Collection();
client.developers = ["1208958778243031060"];
client.database = {
  users: new TwinDB("users"),
  guilds: new TwinDB("guilds"),
};

client.login(process.env.TOKEN);

export default client;

for (const subFolder of fs.readdirSync("./src/discord/commands/")) {
  for (const cmd of fs.readdirSync(`./src/discord/commands/${subFolder}`)) {
    const { default: command } = await import(
      `./src/discord/commands/${subFolder}/${cmd}`
    );

    client.commands.set(command.name, command);
    console.log(`${command.name} — [CARREGADO]`);
  }
}

for (const event of fs.readdirSync("./src/discord/events/")) {
  const { default: eventData } = await import(`./src/discord/events/${event}`);

  client.on(eventData.name, (...args) => eventData.run(client, ...args));
  console.log(`${eventData.name} — [CARREGADO]`);
}
