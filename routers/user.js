const express = require('express')
const router = express.Router()

router.set('view engine', 'ejs')

router.get('/',(req, res) => {
    console.log("Here")
    res.render("index", {text: "World" })
})