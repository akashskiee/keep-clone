const express = require('express');
const router = express.Router();

//GET API Keep
//Access level Private

router.get('/', (req, res) => res.send("Keep Route"));

module.exports = router;