// Home Logic

const home = async(req, res) => {
    try {
        res.status(200).send('welcome to main page using controllers');
    }catch (err) {
        console.log(err);
    }
};

// register logic 
const register = async(req, res) => {
    try {
        res.status(200).send('welcome to register page using controllers');
    }catch (err) {
        res.status(404).send({msg: "page not found"})
    }
};

module.exports = { home, register };