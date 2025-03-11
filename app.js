const express = require('express')
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(3000, () => {
    console.log('express application is running on port 3000')
})