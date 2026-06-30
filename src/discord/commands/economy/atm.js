export default {
  name: "atm",
  aliases: ["saldo", "balance", "bal", "cenouras"],
  async run(client, message, args) {
    const { author } = message;
    const user = client.database.users.get(author.id);

    message.reply(`## <:carrotbag:1521516358926340116> › Saldo
> - [ ${user.cenouras.toLocaleString("pt-Br") ?? 0} ] — Cenouras <:carrots:1521306546875924652>`);
  },
};
