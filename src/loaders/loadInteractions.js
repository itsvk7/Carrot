import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadInteractions(client) {
  const interactionsPath = path.resolve(__dirname, "../components");
  const folders = fs.readdirSync(interactionsPath);

  for (const subFolders of folders) {
    const componentsFiles = fs.readdirSync(
      path.resolve(interactionsPath, subFolders),
    );

    for (const componentFile of componentsFiles) {
      const { default: component } = await import(
        `../components/${subFolders}/${componentFile}`
      );

      if (!component) return;

      client.components.set(component.customID, component);
    }
  }
}
