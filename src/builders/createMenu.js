import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
} from "discord.js";

export function createMenu({
  id,
  placeholder = "› Selecione uma opção",
  options = [],
}) {
  const menu = new StringSelectMenuBuilder()
    .setCustomId(id)
    .setPlaceholder(placeholder);

  if (options.length > 0) {
    menu.addOptions(
      options.map((option) => {
        const newOption = new StringSelectMenuOptionBuilder()
          .setValue(option.value)
          .setLabel(option.label);

        if (option.description) {
          newOption.setDescription(option.description);
        }

        if (option.emoji) {
          newOption.setEmoji(option.emoji);
        }

        return newOption;
      }),
    );
  }

  return menu;
}
