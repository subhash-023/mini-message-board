const { Router } = require('express')
const db = require('../db/queries')
const indexRouter = Router()

// const messages = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added:  new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
//     }
//   ];  

indexRouter.get('/', async (req, res) => {
    const messages = await db.getAllMessages()
    console.log(messages)
    res.render('index', { messages : messages })
})

indexRouter.get('/new', (req, res) => {
    res.render('form')
})

indexRouter.post('/new', async(req, res) => {
    const authorName = req.body.authorName
    const messageText = req.body.messageText
    await db.insertMessage(messageText, authorName, new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}))

    // messages.push({text: messageText, user: authorName, added: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})})
    res.redirect('/')
})

module.exports = indexRouter