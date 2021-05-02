const path = require('path')

const { config, engine } = require('express-edge');
const express = require('express')
const app = new express()


app.use(express.static('public'))

app.use(engine); // instead of app.use(expressEdge);
app.set('views', `${__dirname}/views`);
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.listen(4000, () => {

    console.log('app listening on port 4000')

})