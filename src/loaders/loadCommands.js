import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadCommands(client) {
  const commandsPath = path.resolve(__dirname, "../commands");

  const commands = fs.readdirSync(commandsPath, {
    recursive: true,
  });

  for (const commandFile of commands) {
    if (!commandFile.endsWith(".js")) continue;

    const commandPath = path.join(commandsPath, commandFile);

    const { default: command } = await import(pathToFileURL(commandPath).href);

    if (!command) continue;

    client.commands.set(command.name, command);
  }
}
