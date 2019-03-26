const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    std_name: {
        type: String,
        required: true
    },
    std_id: {
        type: String,
        required: true
    },
    std_email: {
        type: String,
        required: true
    },
 
    std_pwd: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('StudentDetails', userSchema);