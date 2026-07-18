import { interaction } from "../../factories/interaction.js";

export default interaction({
  customID: "teste",
  async run(client, interaction) {
    await interaction.update({
      content: `Olá, ${interaction.user}!`,
      components: [],
    });
  },
});
