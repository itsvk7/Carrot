export default {
  name: "ping",
  aliases: ["latencia"],

  async run(client, message, args) {
    message.reply(`🏓 | Minha latência é de \`${client.ws.ping}ms\``);
  },
};

