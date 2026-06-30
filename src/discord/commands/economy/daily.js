import { randomNumber } from "../../../functions/random.js";
import messages from "../../../constants/message.json" with { type: "json" };

export default {
  name: "daily",
  async run(client, message) {
    // Buscando o usuário na db
    const user = message.author;
    const userDB = client.database.users.get(user.id);

    const amount = randomNumber(500, 3000);

    const cooldownMs = 24 * 60 * 60 * 1000;
    const now = Date.now();
    const lastUse = userDB?.cooldowns?.daily;

    if (lastUse) {
      const timeRemaining = cooldownMs - (now - lastUse);

      if (timeRemaining > 0) {
        return message.reply(`## ${messages.cooldown.emoji} › ${messages.cooldown.message}
Você poderá coletar sua recompensa diária novamente <t:${Math.floor((Date.now() + timeRemaining) / 1000)}:R>`);
      }
    }

    client.database.users.set(`${user.id}.cooldowns.daily`, now);
    client.database.users.sum(`${user.id}.cenouras`, amount);

    message.reply(`## <:carrots:1521306546875924652> › Recompensa Diária
Você coletou <:carrots:1521306546875924652> **${amount} cenouras** na sua recompensa diária!
> -# <:timer:1521321398964977695> — Volte em um dia para coletar a recompensa novamente.`);
  },
};
