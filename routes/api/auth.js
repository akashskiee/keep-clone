const express = require('express');
const router = express.Router();

//GET API AUTH

router.get('/', (req, res) => res.send("Auth Route"));

module.exports = router;