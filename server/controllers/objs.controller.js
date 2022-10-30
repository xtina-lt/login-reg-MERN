const Obj = require('../models/obj.model');
const jwt = require('jsonwebtoken');
const SECRET = "NOTSOSECRET"
const User = require('../models/user.model');

module.exports = {
    getAll: (req, res) => {
        Obj.find()
            .populate('creator', 'first last ')
            .then(e => res.json(e))
            .catch(e => res.status(400).json({ message: 'something went wrong in find all objs', error: e }));
    },

    getByUser: (req, res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Obj.find({ creator: user._id })
            .populate('creator', 'first last ')
            .then(e => res.json(e))
            .catch(e => res.status(400).json({ message: 'problem finding obj by user', error: e }))
    },

    create: (req, res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Obj.create({ ...req.body, creator: user })
            .then(e => res.status(201).json(e))
            .catch(err => {
                console.log('Create Obj error', err);
                res
                    .status(400)
                    .json({ message: 'problem in create obj', errors: err.errors });
            });
    },

    update: (req, res) => {
        Obj.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(e => res.json(e))
            .catch(e => res.status(400).json( {message: 'problem in update obj', errors: e.errors } ));
    },

    delete: (req, res) => {
        Obj.deleteOne({ _id: req.params.id })
            .then( e => res.json(e) )
            .catch( e => res.status(400).json( {message: 'problem in delete obj', error: e } ));
    }

};