import { createCommand } from "../../factories/createCommand.js";

export default createCommand({
  name: "ping",
  aliases: ["p", "latencia"],
  description: "Mostra a latência do bot",
  async run(client, message) {
    const latency = client.ws.ping;

    await message.reply(`O meu ping é de \`${latency}ms\``);
  },
});
