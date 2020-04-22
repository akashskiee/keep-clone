const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({errors: [{mgs: 'Authorizationed denied!'}]});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode.user;
        next();
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json({errors: [{mgs: 'Internal Server Error, try again!'}]})
    }
}