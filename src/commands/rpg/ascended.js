import { createCommand } from "../../factories/createCommand.js";
import {
  SectionBuilder,
  ContainerBuilder,
  MessageFlags,
  TextDisplayBuilder,
} from "discord.js";

export default createCommand({
  name: "ascender",
  async run(client, message) {
    const user = message.author;
    const userDB = client.database.users?.get(user.id);

    if (userDB?.ascended) return message.reply("já ascendeu já puto");

    const title = new TextDisplayBuilder({
      content: "# <:hat:1529196576587644948> — Ascensão",
    });

    const section = new SectionBuilder({
      components: [title],
    });

    const container = new ContainerBuilder({
      components: [section],
    });

    await message.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [container],
    });
  },
});
