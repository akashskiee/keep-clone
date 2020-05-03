const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
require('dotenv').config();
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const {transporter, getPasswordResetURL, resetPasswordTemplate} = require('../../config/email');

//GET API AUTH

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error, Please try again!');
    }
});


//POST API Auth Authenticated users - Login

router.post('/', 
[
check('email', 'Please enter a valid email').isEmail(),
check('password', 'Password is required').notEmpty()
],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET,
            {expiresIn: 36000},
            (err, token) => {
                if(err) throw err;
                res.json({token})
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error, Please try again!')
    }
}
);


//POST API Auth Forgot Password - users

router.post('/forgot', async (req, res) => {
    try {
        const {email} = req.body
        if(!email) return res.status(400).json({errors : [{msg: 'Enter your email'}] });
        const oldUser = await User.findOne({email});
        const {_id, password, date} = oldUser
        const passwordhashtoken = password + date;
        
        const token = jwt.sign({_id}, passwordhashtoken, {expiresIn: 3600})
        
        const url = getPasswordResetURL(oldUser, token)
        const emailTemplate = resetPasswordTemplate(oldUser, url)

        const sendEmail = () => {
            transporter.sendMail(emailTemplate, (err, info) => {
                if(err){
                    res.status(500).json({errors: [{msg: 'Ohhoo! Something failed at our end, please try again after sometime'}] });
                } 
                res.json("Email sent");

            })
        }
        await sendEmail();

      
    } catch (err) {
        console.error(err.message);
        res.send(500).send('Server Error, Please try again!');
    }
})

module.exports = router;