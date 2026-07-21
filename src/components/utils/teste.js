import { createComponent } from "../../factories/createComponent.js";

export default createComponent({
  customID: "teste",
  async run(client, interaction) {
    await interaction.update({
      content: `Olá, ${interaction.user}!`,
      components: [],
    });
  },
});
