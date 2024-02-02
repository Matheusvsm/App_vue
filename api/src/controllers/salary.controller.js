const db = require("../config/database");

exports.createSalary = async (req, res) => {
    try {
        const { Salary } = req.body;
    
        const { rows } = await db.query(
          "INSERT INTO users (Salary) VALUES ($1)",
          [Salary]
        );
    
        res.status(201).send({
          message: "Salario   adicionado com sucesso!",
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
}