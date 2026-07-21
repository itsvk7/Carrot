export function createCommand({
  name,
  aliases = [],
  description = "",
  devOnly = false,
  run,
}) {
  return { name, aliases, description, devOnly, run };
}
