const mongoose = require('mongoose');

const ObjSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Gimme anyyythinnngg🙃'],
            minlength: [5, 'Gimme some more🍫'],
        },
        pic: {
            type: String,
            required: [true, 'Gimme anyyythinnngg🙃'],
            minlength: [12, 'Gimme some more🍫'],
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    },
);

const Obj = mongoose.model('obj', ObjSchema);
module.exports = Obj;