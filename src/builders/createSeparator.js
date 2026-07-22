import { SeparatorBuilder, SeparatorSpacingSize } from "discord.js";

export function createSeparator(size, div) {
  const separator = new SeparatorBuilder().setDivider(div);

  if (size === "large") {
    separator.setSpacing(SeparatorSpacingSize.Large);
  } else {
    separator.setSpacing(SeparatorSpacingSize.Small);
  }

  return separator;
}
