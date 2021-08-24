const User = require('../models/User')
const alertError = (error) => {
    let errors = { name: '', email: '', password: '' };
    console.log(error.message);
    console.log(error.code);

    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name, email, password
        });
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json('failed user creation');
    }
}

module.exports.login = (req, res) => {
    res.send('login')
}

module.exports.logout = (req, res) => {
    res.send('logout')
}