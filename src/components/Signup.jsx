import React from "react";
import { NavLink } from "react-router-dom"


export const Signup = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>signUp</h1>
                <div className="input-box">
                    <input type="text"
                        placeholder="Username" required
                    />

                </div>

                <div className="input-box">
                    <input type="text"
                        placeholder="Email" required
                    />

                </div>


                <div className="input-box">
                    <input type="Password"
                        placeholder="Password" required
                    />
                </div>
                <div className="input-box">
                    <input type="Password"
                        placeholder="Confirm Password" required
                    />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <NavLink to="/Forgotpassword">Forgot Password ?</NavLink>
                </div>
                <button type="submit">Signup</button>
                <div className="signup-link">
                    <p>Don't have a account ?<NavLink to="/Login">Login</NavLink></p>
                </div>
            </form>
        </div>
    )
}
