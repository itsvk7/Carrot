import { createCommand } from "../../factories/createCommand.js";
import { b } from "../../builders/index.js";
import { MessageFlags } from "discord.js";

export default createCommand({
  name: "teste",
  authorOnly: true,
  async run(client, message) {
    const button = b.createButton({
      id: "teste",
      label: "Clique em mim",
      style: "Primary",
    });
    const phrase = b.createText("# Testando Function");

    await message.reply({
      components: [button, phrase],
      flags: MessageFlags.IsComponentsV2,
    });
  },
});
