const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit the process on failure
    }
};

module.exports = connectToMongo;
