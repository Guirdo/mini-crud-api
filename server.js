const express = require('express')
const mongoose = require('mongoose')
const CompanyRoutes = require('./routes/CompanyRoutes')
const PORT = 3000

/* const jwt = require('jsonwebtoken')
const userModel = require('./models/User')
const SECRET_KEY = 'desde septiembre se siente que viene diciembre' */

//localhost:3000/auth
/* server.use('/api/v1/auth', (req, res) => {
  const { email, password } = req.body

  const validatedUser = userModel.validateUser(email, password)

  if (validatedUser) {
    const token = jwt.sign({ validatedUser }, SECRET_KEY, { expiresIn: '5m' })
    res.status(201).send({ token })
  } else {
    res.status(401).send({ message: 'Correo o contraseña incorrectos' })
  }

})

const validateToken = (req, res, next) => {
  const authHeader = req.get('authorization')

  if (authHeader) {
    // Bearer <token>
    const accessToken = authHeader.split(' ')[1]

    jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
      if (error) {
        res.status(401).send({ message: 'Token no valido' })
      } else {
        next()
      }
    })
  } else {
    res.status(404).send({message: 'Petición incorrecta'})
  }
} */

const server = express()

server.use(express.json())

//Middleware para el control del acceso al consumo de la API
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

server.use('/api/v1/companies',  CompanyRoutes)

const mongooseConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://guirdo:JrJI0klpEOwRf7yL@cluster0.2irewjx.mongodb.net/tinder?retryWrites=true&w=majority')
    console.log('Conexión exitosa')
  } catch (error) {
    console.error(error)
  }
}

mongooseConnect()

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})