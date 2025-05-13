const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playername: {
        type: String,
        required: true
    },
    position: {
        type: String
    },
    games : {
        type: Number
    },
    atBat: {
        type: Number
    },
    runs: {
        type: Number
    },
    hits: {
        type: Number
    },
    double2b: {
        type: Number
    },
    thirdBaseman: {
        type: Number
    },
    homerun: {
        type: Number
    },
    runBatted: {
        type: Number
    },
    aWalk: {
        type: Number
    },
    strikeouts: {
        type: Number
    },
    stolenBase: {
        type: Number
    },
    caughtStealing: {
        type: Number
    },
    avg: {
        type: Number
    },
    onbasePercentage: {
        type: Number
    },
    sluggingPercentage: {
        type: Number
    },
    basePlusSlugging: {
        type: Number
    }
})
module.exports = mongoose.model("Player", playerSchema, "players")