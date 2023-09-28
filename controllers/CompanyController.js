const company = require('../models/Company')

const getAllCompanies = async (req, res) => {
  const companies = await company.getAll()
  res.status(201).send({companies})
}

const insertCompany = async (req, res) => {
  const { name } = req.body

  await company.insertCompany({ name })
    .then((response) => {
      res.status(201).send({message: 'Empresa agregada'})
    })
    .catch((error) => {
      res.status(401).send({message: 'Error, datos invalidos'})
    })
}

const updateCompany = async (req,res) => {
  const { id } = req.params
  const { name } = req.body

  await company.updateCompany(id, { name })
  .then((response) => {
    res.status(201).send({message: 'Empresa actualizada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, datos invalidos'})
  })
}

const removeCompany = async (req,res) => {
  const { id } = req.params

  await company.removeCompany(id)
  .then((response) => {
    res.status(201).send({message: 'Empresa Eliminada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, empresa no encontrada'})
  })
}

const getOneCompany = async (req,res) => {
  const { id } = req.params

  const result = await company.getCompany(id)
  res.status(201).send({company: result})
}

module.exports = {
  getAllCompanies,
  insertCompany,
  updateCompany,
  removeCompany,
  getOneCompany
}

