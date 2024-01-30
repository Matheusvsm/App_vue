const db = require("../config/database");
const bcrypt = require('bcrypt');
// ==> método responsável por criar um novo 'Usuario':

exports.createUser = async (req, res) => {
  try {
    const { user_name, password } = req.body;

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password,6);

    const { rows } = await db.query(
      "INSERT INTO users (user_name, password) VALUES ($1, $2)",
      [user_name, hashedPassword]
    );

    res.status(201).send({
      message: "Usuário adicionado com sucesso!",
      body: {
        usuario: { user_name },
      },
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).send({
      message: "Erro interno do servidor ao criar usuário.",
    });
  }
};
