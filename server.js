// app.js created by: Ian Jacobs 
// Description:

// Last Modified: 4/23/2022
// Links:
//      GitHub:


const express = require('express')
const app = express()

const env = require('dotenv')
const path = require('path')

const exphbs = require('express-handlebars')

app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    helpers: {
        // hbs Helpers added here
    } 
}))

app.set('view engine', '.hbs');

const HTTP_PORT = process.env.PORT || 8080

app.use(express.static('public'));

onAppStart = () => {
    console.log(`\nExpress server listening on Port ${HTTP_PORT} ✅✅✅\n`)
}


app.get('/', (req, res) => {
    //res.send("Welcome to my Website!")
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('home')
})


// Rendering 404 page when page not found
app.use((req, res,) => {  
    res.status(404).render("404"); 
})

app.listen(HTTP_PORT, onAppStart)