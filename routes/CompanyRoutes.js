const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController')

// Obtener todas las tareas
router.get('/', CompanyController.getAllCompanies)

// Agregar una nueva tarea
router.post('/', CompanyController.insertCompany)

// Actualizar una tarea
router.patch('/:id', CompanyController.updateCompany)

// Eliminar una tarea
router.delete('/:id', CompanyController.removeCompany)

// Obtener una tarea
router.get('/:id', CompanyController.getOneCompany)


module.exports = router