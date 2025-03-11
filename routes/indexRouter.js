const { Router } = require('express')
const indexRouter = Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added:  new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
    }
  ];  

indexRouter.get('/', (req, res) => {
    res.render('index', { messages : messages })
})

indexRouter.get('/new', (req, res) => {
    res.render('form')
})

indexRouter.post('/new', (req, res) => {
    const authorName = req.body.authorName
    const messageText = req.body.messageText

    messages.push({text: messageText, user: authorName, added: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})})
    res.redirect('/')
})

module.exports = indexRouter