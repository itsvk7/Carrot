export default {
  name: "registrar",
  aliases: ["registro"],
  async run(client, message) {
    const user = message.author;
    const userDB = client.database.users.get(user.id);

    if (userDB?.registro)
      return message.reply(`# <:warN:1521297914964480171> › [AVISO]
> Você já está registrado!`);

    client.database.users.set(`${user.id}.registro`, true);

    message.reply(`# <:register:1521302972154511361> › [SUCESSO]
Você foi registrado com sucesso no meu banco de dados!
> -# ╰ Explore meus comandos usando \`c,help\``);
  },
};
