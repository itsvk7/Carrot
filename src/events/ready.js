import { createEvent } from "../factories/createEvent.js";
import colorize from "strcolorize";

export default createEvent({
  name: "clientReady",
  run(client, message) {
    console.log(colorize("#bold yellow[Carrot] — Online!"));
  },
});
