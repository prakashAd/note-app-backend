const express =require ("express")
const { addnote, getAllNotes, updateNote, deleteNote } = require("../controller/noteController")
const router = express.Router()

router.post('/addnote',addnote)
router.get('/getallnotes',getAllNotes)
router.put('/updatenote/:id',updateNote)
router.delete('/deletenote/:id',deleteNote)

module.exports = router