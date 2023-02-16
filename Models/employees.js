const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({
    firstName: {
        type: 'String',
        required: true
    },

    lastName: {
        type: 'String',
        required: true
    },

    email: {
        type: 'String',
        required: true,
        required: ['Must consist of letters and at least a number']
    },

    gender: {
        type: 'String',
        required: true
    },

    race: {
        type: 'String',
        required: true
    },

    height: {
        type: 'String',
        required: true,
    },

    dob: {
        type: String,
        required: true,
        max: [2023, 'DOB must not be older than or equal to 2023']
    },

    maritalStatus: {
        type: 'String',
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdateAt: {                     
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('employees', EmployeesSchema)