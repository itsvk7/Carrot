import { TextDisplayBuilder } from "discord.js";

export function createText(text) {
  const newText = new TextDisplayBuilder({
    content: text,
  });

  return newText;
}
