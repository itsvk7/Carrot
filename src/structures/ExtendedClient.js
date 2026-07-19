import { Client, Collection } from "discord.js";
import { loadCommands } from "../loaders/loadCommands.js";
import { loadEvents } from "../loaders/loadEvents.js";
import { loadInteractions } from "../loaders/loadInteractions.js";
import { TwinDB } from "twin-db";

export class ExtendedClient extends Client {
  constructor({
    intents = 3276799,
    prefix = "c,",
    developers = ["1208958778243031060"],
  }) {
    super({ intents });

    this.commands = new Collection();
    this.components = new Collection();
    this.database = {
      users: new TwinDB("database/users"),
    };

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
    await loadInteractions(this);
  }
}
