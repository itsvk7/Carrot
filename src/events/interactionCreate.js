import { event } from "../factories/event.js";
import { MessageFlags } from "discord.js";

export default event({
  name: "interactionCreate",
  async run(client, interaction) {
    if (
      !interaction.isButton() &&
      !interaction.isAnySelectMenu() &&
      !interaction.isModalSubmit()
    ) {
      return;
    }

    if (interaction.message.createdTimestamp < (client.readyTimestamp || 0)) {
      await interaction.reply({
        content: "Os dados dessa interação foram perdidos...",
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const args = interaction.customId.split("-");
    const id = args.shift();
    const interactionData = client.components.get(id);

    if (!interactionData) return;

    if (interactionData?.authorOnly && interaction.user.id !== args[0]) {
      await interaction.reply({
        content: "Somente o autor pode usar isso",
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      return await interactionData.run(client, interaction, args);
    } catch (err) {
      console.error(err);
    }
  },
});
