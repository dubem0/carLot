const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OwnersSchema = new Schema({
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

    password: {
        type: 'String',
        required: true,
        required: ['Must have a character and a number']
    },

    userName: {
        type: 'String',
        required: true
    },

    carNum: {
        type: '',
        required: ''
    },

    state: {
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
OwnersSchema.pre('save', function(next) {
    if(this.password){
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.harshSync(this.password, salt)
    }
    next()
})
module.exports = mongoose.model('owners', OwnersSchema)