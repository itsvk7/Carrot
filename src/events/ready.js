import { event } from "../factories/event.js";
import colorize from "strcolorize";

export default event({
  name: "clientReady",
  run(client, message) {
    console.log(colorize("#bold yellow[Carrot] — Online!"));
  },
});
