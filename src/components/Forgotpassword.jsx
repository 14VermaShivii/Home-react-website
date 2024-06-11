import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

export const Forgotpassword = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Forgotpassword</h1>
                <div className="input-box">
                    <input type="password"
                        placeholder="password" required

                    />

                    {/* <FontAwesomeIcon icon={faUser} /> */}

                </div>
                <div className="input-box">

                    <input type="Password"
                        placeholder="Confirm Password" required
                    />
                    {/* <FontAwesomeIcon icon={faLock} /> */}
                </div>
                {/* <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password ?</a>
                </div> */}
                <button type="submit">Resset Password</button>
                <div className="signup-link">
                    <p>Don't have a account ?<NavLink to="/Login">Login</NavLink></p>
                </div>
            </form>
        </div>
    )
}