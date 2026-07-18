import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadCommands(client) {
  const commandsPath = path.resolve(__dirname, "../commands");
  const folders = fs.readdirSync(commandsPath);

  for (const subFolders of folders) {
    const commands = fs.readdirSync(path.resolve(commandsPath, subFolders));

    for (const commandFile of commands) {
      if (!commandFile.endsWith(".js")) continue;

      const { default: command } = await import(
        `../commands/${subFolders}/${commandFile}`
      );

      if (!command) return;

      client.commands.set(command.name, command);
    }
  }
}
