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
        res.json(keeps) 
    } catch (err) {
        error(err.message);
        res.status(500).send('Server Error, try again!');
    }
});

module.exports = router;