import { inspect } from "node:util";
import { createCommand } from "../../factories/createCommand.js";

export default createCommand({
  name: "eval",
  aliases: ["ev", "e"],
  devOnly: true,

  async run(client, message, args) {
    if (!args.length) {
      return message.reply("Forneça um código para avaliar.");
    }

    const code = args.join(" ");

    try {
      const result = await eval(code);

      const output = inspect(result, {
        depth: 3,
        colors: false,
      })
        .replaceAll("```", "\\`\\`\\`")
        .slice(0, 1990);

      await message.reply(`\`\`\`js\n${output}\n\`\`\``);
    } catch (error) {
      const output = `${error.name}: ${error.message}`;

      await message.reply(`\`\`\`js\n${output}\n\`\`\``);
    }
  },
});
