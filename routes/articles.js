const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// GET
router.get("/", (req, res) => {
    console.log(req.body);
    Article
        .find()
        .then((articles) => res.json(articles))
        .catch(() => res.status(404).json({ noArticlesFound: "No Articles found" }));
});


// POST
router.post("/", (req, res) => {
    console.log(req.body);
    Article
        .create(req.body)
        .then(() => res.json({ msg: "Article added successfully" }))
        .catch((err) => res.status(400).json({ error: `Unable to add this article. ${err.message}` }));
});

//PUT
router.put("/", (req, res) => {
    console.log(req.body);
    Article
        .findByIdAndUpdate(req.params.id)
        .then(() => res.json({ msg: "Article updated successfully" }))
        .catch((err) => res.status(400).json({ error: `Unable to update this article. ${err.message}` }));
});

module.exports = router;