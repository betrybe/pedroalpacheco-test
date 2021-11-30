const express = require('express');

const router = express.Router();

const userValidator = require('../Middlewares/userValidator');

router.use(express.json());

router.post('/', userValidator, (req, res) => res.status(201).send('status'));

module.exports = router;