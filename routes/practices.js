const express = require("express");
const router = express.Router();
const Practice = require("../models/Practice");

// GET
router.get("/", (req, res) => {
    Practice
        .find()
        .then((practices) => res.json(practices))
        .catch((err) => res.status(404).json({noPracticesFound: `No practices found: ${err.message}`}));
});

module.exports = router;
