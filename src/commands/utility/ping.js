import { command } from "../../factories/command.js";

export default command({
  name: "ping",
  aliases: ["pong", "latencia"],
  description: "Mostra a latência do bot",
  async run(client, message) {
    const latency = client.ws.ping;

    await message.reply(`O meu ping é de \`${latency}ms\``);
  },
});
