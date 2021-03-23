const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:zsazsa123@cluster0.zyypm.mongodb.net/intro-to-mongodb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});