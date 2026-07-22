import { b } from "../../builders/index.js";
import { createComponent } from "../../factories/createComponent.js";

export default createComponent({
  customID: "teste",
  async run(client, interaction) {
    const menu = b.createMenu({
      id: "menu",
      options: [
        { label: "Arco", value: "arqueiro" },
        { label: "Cajado", value: "mago" },
      ],
    });

    const text = b.createText(`Olá, ${interaction.user}`);

    await interaction.update({
      components: [text, menu],
    });
  },
});
