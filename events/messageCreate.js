import config from "../config.js";

export default {
  name: "messageCreate",

  async run(client, message) {
    if (message.author.bot) return;

    const prefix = config.prefix;

    if (message.content === `<@${client.user.id}>`) {
      return message.reply({
        content: `# <:carrot:1521258947024257204> › Me chamou?
> Olá, ${message.author}! Eu me chamo **Carrot** e meu prefixo é \`c,\`
-# ㅤ╰ Para saber mais sobre mim use \`c,help\`.`,
        allowedMentions: { repliedUser: false },
      });
    }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift()?.toLowerCase();

    const cmd =
      client.commands.get(command) ||
      client.commands.find(
        (als) => als.aliases && als.aliases.includes(command),
      );

    if (cmd) return cmd.run(client, message, args);
  },
};
