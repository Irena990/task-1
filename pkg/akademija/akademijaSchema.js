const mongoose = require("mongoose");

const akademijaSchema = new mongoose.Schema({
    ime: {
        type: String,
    },
    adresa: {
        type: String,
    },
});

const Akademija = mongoose.model("Akademija", akademijaSchema);

module.exports = Akademija;
