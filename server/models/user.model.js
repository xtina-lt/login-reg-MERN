const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = new mongoose.Schema({
    first: {
        type: String,
        required: [true, 'Gimme a name🦄'],
        minLength: [2, 'Gimme some more🦄']
    },
    last: {
        type: String,
        required: [true, 'Gimme a name🦄'],
        minLength: [2, 'Gimme some more🦄']
    },
    email : {
        type: String,
        required: [true, 'Password Required🦄'],
        minLength: [8, 'Gimme some more🦄']
    },
    password: {
        type: String,
        required: [true, 'Gimme a name🦄'],
        minLength: [8, 'Gimme some more🦄']
    }
}, {timestamps: true} )

// MongoDB schema provides virtual
// short term value
Schema.virtual('confirmP')
    .get( () => this._confirmP )
    .set( e => this._confirmP = e );
// pre or post middlewear
Schema.pre('validate', function(next){
    if (this.password !== this.confirmP) {
        this.invalidate('confirmP', 'Passwords must match💜💜!!')
    }
    // otherwise call next middlewear
    // alwasy call next middlewear
    next()
})

// check confirm email
Schema.virtual('confirmE')
    .get( () => this._confirmE )
    .set( e => this._confirmE = e);
Schema.pre('validate', function(next){
    if (this.email !== this.confirmE) {
        this.invalidate('confirmE', 'Emails must match💜💜!!')
    }
    next()
})


// SAVE ENCRYPTED PASSWORD
Schema.pre('save', async function (next) {
    try {
        // hash the password, 10 times
        const hashedP = await bcrypt.hash(this.password, 10)
        // update password with hashed password
        this.password = hashedP
        next()
    } catch (err) {
        console.log('ERROR IN SAVE: ', err)
    }
})

module.exports = mongoose.model('User', Schema)





/* JOIN
createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
}
*/