/**
 * Arquivo: src/routes Salary.routes.js
 * Descrição: arquivo responsavel pelas rotas da api relacionado a classe 'Salary'.
 * Data: 02/02/2024
 * Author: Matheus Moura
 */

const Router = require('express-promise-router');
const router = Router();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do Crud - 'User':

// ==> Rota responsável por criar novo 'Usuario': (Post): localhost:3000/api/users
router.post('/users', );
// ==> Rota responsável por listar os 'Usuario': (Get): localhost:3000/api/users
router.get('/users',);
// ==> Rota responsável por listar os 'Usuario' por ID: (Get): localhost:3000/api/users/:id
router.get('/users/:id',);
// ==> Rota responsável por atualizar 'Usuario': (Put): localhost:3000/api/users/:id
router.put('/users/:id',);
// ==> Rota responsável por excluir 'Usuario' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', );
module.exports = router;