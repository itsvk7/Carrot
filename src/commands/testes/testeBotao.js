import { command } from "../../factories/command.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default command({
  name: "teste",
  authorOnly: true,
  async run(client, message) {
    const button = new ButtonBuilder()
      .setCustomId(`teste`)
      .setLabel("Clique em mim")
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(button);

    await message.reply({
      content: "Teste da handler de components:",
      components: [row],
    });
  },
});
