const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 5000;

//public static path
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "/templates/views");
console.log(templates_path)
const partials_path = path.join(__dirname, "/templates/partials");
console.log(partials_path)

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path)); // it means that we have to get static website


app.get("/", (req, res)=>{
    res.render('index')
});
app.get("/about", (req, res)=>{
    res.render('about')
});
app.get("/weather", (req, res)=>{
    res.render('weather')
});
app.get("*", (req, res)=>{
    res.render('404error',{
        err: 'Oops! Page Not Found'
    })
});




app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
});