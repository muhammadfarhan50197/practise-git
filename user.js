const express = require('express');
const users = require('./data');

const router = express.Router();
router.get('/', function(req, res) {
    res.json(users);
});
const userRouter = router;
module.exports = userRouter

