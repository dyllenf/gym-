const mongoose = require("mongoose");

const connect = async () => {
    try {
        // mongodb connection
        const con = mongoose.connect("mongodb+srv://dyllenf:8yMkCwSpH2lxGSfF@cluster0.ehlygij.mongodb.net/?retryWrites=true&w=majority");

        console.log(`MongoDB connected`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect