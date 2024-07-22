import { useState } from "react";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
        ...contact,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(contact);
    };

    return (
        <>
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">contact us</h1>
            </div>

            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/support.png" alt="we are always ready to help" />
                </div>


                <section className="contact-form">
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                        name="message"
                        id="message"
                        autoComplete="off"
                        value={contact.message}
                        onChange={handleInput}
                        required
                        cols="30"
                        rows="6"
                        ></textarea>
                    </div>

                    <div>
                        <button type="submit">submit</button>
                    </div>
                    </form>
                </section>
            </div>

            <section className="mb-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122809.8486012242!2d74.42603851658646!3d15.866697516969392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669f5095362f%3A0x7e34b31edcdefb5f!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721668871451!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </section>
        </>
    );
};