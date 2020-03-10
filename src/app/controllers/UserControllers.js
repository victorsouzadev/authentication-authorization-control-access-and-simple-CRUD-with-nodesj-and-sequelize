const {User} = require('../models')
const bcrypt = require('bcryptjs')
class UserController {
    async create(req,res){
        User.create(req.body)
        return res.status(201).json({email:req.body.email,message:'register: success'})
    }
    async list(req,res){
        const list = await User.findAll()
        return res.status(200).json(list)
    }
    async findById(req,res){
        return await User.findOne({where:{id:req.params.id}})
            .then(user=> res.status(200).json(user))
            .catch(erro=> res.status(500).json(erro))
    }
    async delete(req,res){
       return await User.destroy({where:{id:req.params.id}})
           .then(user=> res.status(200).json(user))
           .catch(erro=> res.status(500).json(erro))
    }
    async update(req,res){
        if(req.body.password){
            const password_hash = await bcrypt.hash(req.body.password,8)
            return await User.update({...req.body,password_hash:password_hash},{where:{id:req.params.id}})
            .then(user=> res.status(200).json(user))
            .catch(erro=> res.status(500).json(erro))
        }
        return await User.update(req.body,{where:{id:req.params.id}})
            .then(user=> res.status(200).json(user))
            .catch(erro=> res.status(500).json(erro))
        
    }
   

}
    


module.exports = new UserController()