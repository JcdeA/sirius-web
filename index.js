const express = require('express')

const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/updates', (req, res) => {
    res.render('updates')
})

app.get('/teams/', (req, res) => {
  res.render('teams/index')
})

app.get('/teams/about', (req, res) => {
  res.render('teams/about')
})

app.get('/teams/contact', (req, res) => {
  res.render('teams/contact')
})

app.get('/teams/index', (req, res) => {
  res.redirect('/teams')
})

app.get('/app/main', (req, res) => {
  res.render('app/main')
})

app.get('/policy/privacy', (req, res) => {
  res.render('policy/privacy')
})

app.get('/policy/tos', (req, res) => {
  res.render('policy/tos')
})

app.get('/index', (req, res) => {
  res.redirect('/')
})

app.get('/support', (req, res) => {
    // res.render('commingsoon')
    res.redirect('https://discord.io/teamsirius')
})

app.listen(port, () => console.log(`Listening on ${port}!`))