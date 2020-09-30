const routes = require('express').Router()
const admin = require('./app/utils/admin')
const authMiddleware = require('./app/middleware/auth')
const SessionController = require('./app/controllers/SessionControllers')
const UserController = require('./app/controllers/UserControllers')
const {User} = require('../src/app/models')
// Routes definition

routes.post('/sessions', SessionController.store)



routes.route('/user')
    .post(UserController.create)
    

routes.use(authMiddleware)

routes.route('/user')
    .get(admin(UserController.list))
routes.route('/user/:id')
    .get(UserController.findById)
    .delete(UserController.delete)
    .put(UserController.update)
   
module.exports = routes;