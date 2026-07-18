import { ExtendedClient } from "./src/structures/ExtendedClient.js";
import dotenv from "dotenv";
dotenv.config();

const client = new ExtendedClient({ intents: 3276799 });

client.start(process.env.TOKEN);
