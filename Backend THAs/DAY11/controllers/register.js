const User = require('../models/user');
const passwordHash = require('password-hash');

const register = async(req, res) => {
    const {email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({where:{email}});
        if(alreadyExists){
            res.status(401).send("Email already exists !");
        }else{
            const hashedPassword = passwordHash.generate(password);
            const newUser = new User( { email: email.toLowerCase(), password: hashedPassword, fullName: "Parth"})
            const savedUser = await newUser.save();
            res.status(201).send("User "+savedUser+" Registered");
        }
    } catch (error) {
    res.status(500).send("Something went wrong!");
    }
    
}


module.exports = register;