const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./resources/routes')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.use(morgan('combined'))

app.engine('hbs', exphbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

// app.get('/aaa', (req, res) => {
//   res.render('search')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
