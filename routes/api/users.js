const express = require('express');
const router = express.Router();

//GET API User
//Access level Private

router.get('/', (req, res) => res.send("User Route"));

module.exports = router;