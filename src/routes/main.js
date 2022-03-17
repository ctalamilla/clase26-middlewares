// ************ Require's ************
const express = require('express');
const router = express.Router();
const validacionUsuario = require('../../middlewares/validacionUsuario')


// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 
router.get('/admin/', validacionUsuario, mainController.admin)


module.exports = router;
