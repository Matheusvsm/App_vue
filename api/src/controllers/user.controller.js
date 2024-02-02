const db = require("../config/database");
const bcrypt = require("bcrypt");
// ==> método responsável por criar um novo 'Usuario':

exports.createUser = async (req, res) => {
  try {
    const { user_name, password } = req.body;

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 6);

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

exports.getUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users ORDER BY user_name ASC");
  res.status(200).send(response.rows);
};

exports.getUserId = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);
  res.status(200).send(response.rows);
};

exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { user_name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 6);
  try {
    const response = await db.query(
      "UPDATE users SET user_name = $1, password = $2 WHERE id = $3",
      [user_name, hashedPassword, userId]
    );

    if (response.rowCount === 0) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ message: "Erro ao atualizar o usuário" });
  }
};

exports.deleteUser = async (req,res) => {
  const userId = parseInt(req.params.id);
  await db.query('DELETE FROM users WHERE id = $1', [userId]);
  res.status(200).send({message: "Usuario deletado com sucesso!",userId});
};
