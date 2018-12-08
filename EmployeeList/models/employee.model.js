const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

mongoose.model('Employee', employeeSchema);