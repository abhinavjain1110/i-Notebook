const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Notes=require('../models/Notes');
const {body,validationResult}=require('express-validator');

//Route 1: Get all notes using get
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes=await Notes.find({user: req.user.id});
    res.json(notes)
})

//Route 2:Add a new note using Post
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description','Description must be atleast 5 characters').isLength({ min: 6 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }
})

//Route 3:Update a note using Put
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
     try{
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        const noteId = req.params.id.substring(1);
        let note = await Notes.findById(noteId);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndUpdate(noteId, { $set: newNote }, { new: true })
        res.json({ note });
    }
    catch(error){
        res.status(500).json({
            error: "Internal server error",
            message: error.message
        });
    }
})

//Route 3:Delete a note using Delete
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
        try{
        const noteId = req.params.id.substring(1);
        let note = await Notes.findById(noteId);
        if (!note) { return res.status(404).send("Not Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndDelete(noteId)
        res.json({ "Success":"Note has been deleted",note: note });
    } 
    catch(error){
        res.status(500).json({
            error: "Internal server error",
            message: error.message
        });
    }
})

module.exports=router