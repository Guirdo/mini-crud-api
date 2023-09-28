const mongoose = require('mongoose')

const companySchema = {
  name: {
    type: String,
    required: true,
  },
}

const Company = mongoose.model('Company', companySchema)

const getAll = async () => {
  const result = await Company.find()
  return result
}

const insertCompany = async (company) => {
  return await Company.create(company)
}

const updateCompany = async (id, newCompany) => {
  const oldCompany = await Company.findById(id)

  oldCompany.name = newCompany.name;

  return await oldCompany.save()
}

const removeCompany = async (id) => {
  return await Company.deleteOne({_id: id})
}

const getCompany = async (id) => {
  return await Company.findById(id)
}

module.exports = {
  getAll,
  insertCompany,
  updateCompany,
  removeCompany,
  getCompany
}
