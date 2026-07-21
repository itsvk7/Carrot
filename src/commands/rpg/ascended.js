import { createCommand } from "../../factories/createCommand.js";
import { SectionBuilder, MessageFlags } from "discord.js";

export default createCommand({
  name: "ascender",
  async run(client, message) {
    const user = message.author;
    const userDB = client.database.users?.get(user.id);

    if (userDB?.ascended) return message.reply("já ascendeu já puto");

    const section = new SectionBuilder()
      .addTextDisplayComponents((textDisplay) =>
        textDisplay.setContent(`# Perfil de ${user}`),
      )
      .setThumbnailAccessory((thumbnail) =>
        thumbnail
          .setDescription("Imagem de perfil")
          .setURL(user.displayAvatarURL()),
      );

    await message.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [section],
    });
  },
});
