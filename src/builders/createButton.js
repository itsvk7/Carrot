import { ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";

export function createButton({ id, label, emoji, disabled = false, style }) {
  const button = new ButtonBuilder()
    .setCustomId(id)
    .setLabel(label)
    .setStyle(ButtonStyle[style]);

  if (emoji) {
    button.setEmoji(emoji);
  }

  if (disabled) {
    button.setDisabled(disabled);
  }

  return new ActionRowBuilder().addComponents(button);
}
