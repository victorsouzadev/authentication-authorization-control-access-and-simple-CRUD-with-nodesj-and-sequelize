const app = require('./app')
app.listen(process.env.PORT || 3000, ()=> console.log(`Running server in port ${process.env.PORT || 3000}`))