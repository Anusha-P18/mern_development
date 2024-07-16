const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try{
        const response = req.body;
        await Contact.create(response);
        res.status(200).json({msg: "Message sent successfully"});
    } catch (err) {
        res.status(500).send({msg: "Message not delivered", err});
    }
}

module.exports = contactForm;