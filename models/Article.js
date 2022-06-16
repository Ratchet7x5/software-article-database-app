const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    pubyear: {
        type: String,
        required: true
    },
    doi: {
        type: String,
        required: true
    },
    claim: {
        type: String,
        required: true
    },
    evidence: {
        type: String,
        required: true
    },
    sepractice: {
        type: String,
        required: true
    },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;