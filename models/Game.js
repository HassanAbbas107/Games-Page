const mongoose = require("mongoose")
const raittingSchema = new mongoose.Schema({
    rate: String,
    content: String,
}, {timestamps:true})

const gameSchema = new mongoose.Schema({
    name:{
        type:String
    },
    link:{
        type:String
    },
    creater:{
        type:mongoose.Schema.Types.ObjectId,
        
        
    }
    , raitting:[raittingSchema]
    

})




const Game = mongoose.model("Game",gameSchema)

module.exports = Game