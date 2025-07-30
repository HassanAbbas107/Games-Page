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

router.get("/:gameId",async(req,res)=>{
    try{
        const foundGame= await Game.findById(req.params.gameId)
        res.render("user/game-details.ejs",{foundGame: foundGame})
    }
    catch(error){
        console.log(error)
    }
})
 router.get("/new", async (req,res)=>{
    res.render("/user/new.ejs")
 })


 router.delete("/:gameId", async (req,res)=>{
         try{
        const deletedgame = await Game.findByIdAndDelete(req.params.id)
        res.redirect("/home")
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router