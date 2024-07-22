import { useState } from "react";

export const Signin = () => {
    const [userLoginDetails, setUserLoginDetails] = useState({
        email: "",
        password: ""

    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserLoginDetails({
            ...userLoginDetails,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLoginDetails);
    }

    return <>
        <section>
            <main>
                <div className="section-login">
                    <div className="login-content container">
                        <h1 className="main-heading">Login Form</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img
                                src="/images/login.png" 
                                alt="login" 
                                width="500"
                                height="500"    
                            />
                        </div>

                        {/* login form */}
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={userLoginDetails.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={userLoginDetails.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Login Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
}