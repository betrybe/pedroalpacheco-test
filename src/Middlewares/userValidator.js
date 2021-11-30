const valida = (campo) => !campo || typeof campo === 'undefined' || campo === null;
        
const userValidator = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (valida(name)) {
        return res.status(400).send('Invalid entries. Try again.');
    }
    if (valida(email)) {
        return res.status(400).send('Invalid entries. Try again.');
    }
    if (valida(password)) {
        return res.status(400).send('Invalid entries. Try again.');
    }

    return next();
};

module.exports = userValidator;