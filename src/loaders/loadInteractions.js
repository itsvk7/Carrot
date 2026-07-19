import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadInteractions(client) {
  const interactionsPath = path.resolve(__dirname, "../components");

  const files = fs.readdirSync(interactionsPath, {
    recursive: true,
  });

  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const filePath = path.join(interactionsPath, file);

    const { default: component } = await import(pathToFileURL(filePath).href);

    if (!component) continue;

    client.components.set(component.customID, component);
  }
}
