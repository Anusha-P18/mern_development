import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email:"",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                },
                body:JSON.stringify(user)
            });
    
            const res_data = await response.json();

            if(response.ok) {
                storeTokenInLS(res_data.token);
                setUser({
                    username: "",
                    email:"",
                    phone: "",
                    password: "",
                });
                toast.success("Registration Successful");
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (err) {
            console.log('Registration error', err);
        }
    }

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="registration-content container">
                        <h1 className="main-heading">Registration Form</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/register.png" 
                                alt="registration" 
                                width="500"
                                height="500"    
                            />
                        </div>

                        {/* registration form */}
                        <div className="registration-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Enter any username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Set any password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
}