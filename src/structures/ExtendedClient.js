import { Client, Collection } from "discord.js";
import { loadCommands } from "../loaders/loadCommands.js";
import { loadEvents } from "../loaders/loadEvents.js";

export class ExtendedClient extends Client {
  constructor({ intents = 3276799, prefix = "c,", developers = [] }) {
    super({ intents });

    this.commands = new Collection();
    this.components = new Collection();

    this.config = {
      prefix,
      developers,
    };
  }

  async start(token) {
    await this.#loadHandlers();

    await this.login(token);
  }

  async #loadHandlers() {
    await loadCommands(this);
    await loadEvents(this);
  }
}
