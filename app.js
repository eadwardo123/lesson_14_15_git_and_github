import express from 'express'
import {engine} from 'express-handlebars'

const app = express()
const port = 3003

app.engine('handlebars',engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get("/", (req,res) =>{
    res.render("index", {
        title:"home",
        author : "eadwardo123"
    })
})

app.get("/profile", (req,res) =>{
    res.render("profile",{
        title:"profile"
    })
})

app.get("/about", (req,res) =>{
    res.render("about",{
        message : "this is my website on express and handlebars!. check it out",
        title:"about"
    })
})

app.listen(port, ()=>{
    console.log(`server run on http://localhost:${port}`)
})