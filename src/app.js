require('dotenv').config({
    path:'.env'
})

const express = require('express')

class AppController{
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express 