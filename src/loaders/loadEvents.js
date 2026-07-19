import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadEvents(client) {
  const eventsPath = path.resolve(__dirname, "../events");
  const events = fs.readdirSync(eventsPath);

  for (const eventFile of events) {
    const { default: event } = await import(`../events/${eventFile}`);

    if (!event) continue;

    client.on(event.name, (...args) => {
      event.run(client, ...args);
    });
  }
}
