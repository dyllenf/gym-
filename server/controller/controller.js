const bcrypt = require('bcrypt')
// controller for register
exports.registerUser = async (req,res) => {
    try{

        if(!req.body){
            res.status(406).json({ err: "You have to fill the registration form" })
            return
        }

        let {email, password, passwordCheck, username} = req.body

        if (!email || !password || !passwordCheck){
            return res.status(406).json({ err:"Not all fields have been entered"})
        }
        if (password.length < 8){
            return res.status(406).json({ error: "Password needs to be at least 8 characters long"})
        }
        if (password !== passwordCheck){
            return res.status(406).json({ error: "Passwords do not match"})
        }

        // hashing password
        const hash = await bcrypt.hashSync(password, 10)

        res.json({ email, hash, passwordCheck, username })
    } catch (error) {
        res.status(500).json({err: error.message || "Error while registration"})
    }
    
}


// controller for login
exports.login = (req, res) => {


    try {

        // validate request
        if(!req.body){
            res.status(406).json({ err: "You have to fill the email and password"})
            return
        }


        // get user data
        const { email, password } = req.body

        // validation
        if(!email || !password){
            res.status(406).json({ err: "Not all fields have been entered" })
        }

        const user = "$2b$10$mwefxQ3yL3FWxZrubUHWK.GQd2o7.9tQ34Dv3m5GMA6zXQgtsHf1O"
        // compare the password
        const isMatch = bcrypt.compare(password,user )

        res.json({ email, isMatch }) 
        
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while logging in"})
    }
    
}