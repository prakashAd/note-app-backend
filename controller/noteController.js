const note = require("../model/notesModel");

//to create new  note

exports.addnote = async (req, res) => {
  let noteToAdd = new note({
    note: req.body.note,
    description:req.body.description
  });
  noteToAdd = await noteToAdd.save();
  if (!noteToAdd) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(noteToAdd)
};

//get all notes
exports.getAllNotes = async (req,res) =>{
  let notes = await note.find()
  if(!notes){
    return res.status(400).json({error:"something went wrong"})

  } 
  res.send(notes)
}

//to update notes

exports.updateNote = async (req,res) =>{
  let noteToUpdate = await note.findByIdAndUpdate(req.params.id,{
    note: req.body.note,
    description:req.body.description

  },{new:true})


  if(!noteToUpdate){
    return res.status(400).json({error:"Something went Wrong"})
  }
  res.send(noteToUpdate)
}

//to delete note
  
exports.deleteNote = (req,res) =>{
  note.findByIdAndDelete(req.params.id)
    .then(note=>{

      if(!note){
        return res.status(400).json({error:"note not found"})
      
    }
  
    res.status(200).json({msg:"note is deleted"})
  })  
  .catch(error=>res.status(400).json({error:error.message}))

}