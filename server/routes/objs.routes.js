const CONTROLLER = require('../controllers/objs.controller')

module.exports = app  => {
    app.post('/api/obj', CONTROLLER.create)
    app.get('/api/objs', CONTROLLER.getAll)
    app.get('/api/objs/user', CONTROLLER.getByUser)
    app.put('/api/obj/:id', CONTROLLER.update);
    app.delete('/api/obj/:id', CONTROLLER.delete);
}