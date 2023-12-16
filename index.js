const express = require('express')
const app = express()


const cors = require('cors')
//json stringify and parse 
app.use(express.json())     //javascript object notation main data strings ma chahiye hota ha isliye hum yeh krty taky har dafa na krna pary
app.use(cors())


require('dotenv').config()
const port = process.env.SERVER_PORT || 3000 

app.use('/api',require('./API/svgname/Router'))
app.use('/api',require('./API/user/Router'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})