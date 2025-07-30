const Game = require("../models/Game")
const router = require("express").Router()
const User =require("../models/User")


router.get("/home",async(req,res)=>{
    const allGames = await Game.find()
    res.render("user/home.ejs",{allGames: allGames})
})

router.get("/new", (req,res)=>{
    try {
       res.render("./user/new") 
    } catch (error) {
      console.log(error)  
    }

})
router.post("/new",async(req,res)=>{
    try{
        await Game.create(req.body)
        res.redirect("/game/home")
    }
    catch(error){
        console.log(error)
    }
})
module.exports = router