const CONTROLLER = require('../controllers/users.controller')

module.exports = app  => {
    app.get('/api/test', CONTROLLER.index)
    app.post('/api/register', CONTROLLER.register)
    app.post('/api/login', CONTROLLER.login)
    app.post('/api/logout', CONTROLLER.logout)
    app.get('/api/user-current', CONTROLLER.getLogged)
    app.put('/api/user/:id', CONTROLLER.updateOne)
}