import config from "../../constants/config.js";

export default {
  name: "messageCreate",

  async run(client, message) {
    const user = message.author;
    const userDB = client.database.users.get(user.id);

    if (user.bot) return;

    const prefix = config.prefix;

    if (message.content === `<@${client.user.id}>`) {
      return message.reply({
        content: `# <:carrot:1521258947024257204> › Me chamou?
> Olá, ${user}! Eu me chamo **Carrot** e meu prefixo é \`c,\`
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

    if (!userDB?.registro) {
      if (cmd.name !== "registrar")
        return message.reply(`# <:warN:1521297914964480171> › [AVISO]
Você não está registrado no meu banco de dados, portanto não pode usar meus comandos.
> -# ╰ Use: \`c,registrar\` para se registrar.`);
    }

    if (cmd) return cmd.run(client, message, args);
  },
};
