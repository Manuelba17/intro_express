const express = require('express');
const router = express.Router();
const controller = require('../controllers/introControllers');

router.get('/', controller.mensaje)

router.get('/suma', controller.suma)

router.get('/usuario', controller.usuario)

router.get('/swapi', controller.swapi)

router.put('/body', controller.body)

router.post('/suma', controller.suma1)

router.delete('/', controller.delete)


module.exports = router;