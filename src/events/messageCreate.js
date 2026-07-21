import { createEvent } from "../factories/createEvent.js";

export default createEvent({
  name: "messageCreate",
  async run(client, message) {
    const user = message.author;
    const prefix = client.config.prefix;

    if (user.bot) return;

    if (message.content === `<@${client.user.id}>`) {
      await message.reply(
        `Olá, ${user}! Eu me chamo Carrot e meu prefixo é \`${prefix}\``,
      );
    }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift()?.toLowerCase();
    const cmd = client.commands.find(
      (c) => c.name === command || c.aliases.includes(command),
    );

    if (cmd) {
      if (cmd.devOnly && !client.config.developers.includes(user.id)) {
        return await message.reply(
          "Você não tem permissão para usar esse comando!",
        );
      }

      return cmd.run(client, message, args);
    }
  },
});
