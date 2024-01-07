const jwt = require('jsonwebtoken')

// create a 
const auth = (req, res, next) => {
    const token = req.header("x-access-token")

    if (!token){
        return res.status(406).json({ err: "No authentication token, authorization denied" })
    }

    const verified = jwt.verify(token, '1FOdnO0mz1QyJlb')

    if(!verified) return res.status(406).json({ err: "Token verification failed, authorization denied" })


    req.user_id = verified.id
    next();
}

module.exports = auth