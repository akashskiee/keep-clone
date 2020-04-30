const express = require('express');
const {check, validationResult} = require('express-validator');
const router = express.Router();
const Keep = require('../../models/Keep');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const {log, error} = console;

//POST API post keep
//Access level private

router.post('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        const newKeep = new Keep({
            title: req.body.title,
            content: req.body.content,
            user: req.user.id
        });

        const keep = await newKeep.save();
        res.json(keep);


    } catch (err) {
        error(err.message);
        res.status(500).send('Server Error, try again!');
    }

});


//GET API Keep
//Access level Private

router.get('/', auth, async (req, res) => {
    try {
        const keeps = await Keep.find().sort({date: -1});
        res.json(keeps); 
    } catch (err) {
        error(err.message);
        res.status(500).send('Server Error, try again!');
    }
});


//GET API Keep by id
//Access level private

router.get('/:id', auth, async (req, res) => {
    try {
        const keep = await Keep.find({ user: req.params.id});
        res.json(keep);
    } catch (err) {
        error(err.message);
        res.status(500).send('Server Error, try again!');
    }
});


//DELETE API Keep by id
//Access level private

router.delete('/:id', auth, async(req, res) => {
    try {
        const keep = await Keep.findById(req.params.id);

        if(!keep){
            return res.status(404).json('Keep not found');
        }
        if(keep.user.toString() !== req.user.id){
            return res.status(401).json('Unauthorized!');
        } 
        await keep.remove();
        res.json({msg: 'Deleted!'})
    } catch (err) {
        error(err.message);
        if(err.name == 'CastError'){
            return res.status(404).json('Keep not found');
        }
    }
});


module.exports = router;