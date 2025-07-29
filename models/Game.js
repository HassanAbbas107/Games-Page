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
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    , raitting:[raittingSchema]

})




const Game = mongoose.model("Game",gameSchema)

module.exports = Game