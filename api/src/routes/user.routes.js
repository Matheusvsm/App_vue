/**
 * Arquivo: src/routes user.routes.js
 * Descrição: arquivo responsavel pelas rotas da api relacionado a classe 'User'.
 * Data: 30/01/2024
 * Author: Matheus Moura
 */

const Router = require('express-promise-router');
const router = Router();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do Crud - 'User':

// ==> Rota responsável por criar novo 'Usuario': (Post): localhost:3000/api/users
router.post('/users', userController.createUser);
// ==> Rota responsável por listar os 'Usuario': (Get): localhost:3000/api/users
router.get('/users',userController.getUsers );
// ==> Rota responsável por listar os 'Usuario' por ID: (Get): localhost:3000/api/users/:id
router.get('/users/:id',userController.getUserId);
// ==> Rota responsável por atualizar 'Usuario': (Put): localhost:3000/api/users/:id
router.put('/users/:id',userController.updateUser);
// ==> Rota responsável por excluir 'Usuario' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', userController.deleteUser);
module.exports = router;