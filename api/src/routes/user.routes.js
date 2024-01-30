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

module.exports = router;