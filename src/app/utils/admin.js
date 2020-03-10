module.exports = admin => {
    return (req, res, next) => {
        if(req.headers.admin) {
            admin(req, res, next)
        } else {
            res.status(401).send('User not admin.')
        }
    }
}