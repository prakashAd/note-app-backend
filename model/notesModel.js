const mongoose = require ('mongoose')
const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required:true,
        trim: true

    },
    description: {
        type:String,
        required:true,
        trim:true

    }
},{timestamps:true})

module.exports = mongoose.model("note",noteSchema)