import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { useFormik } from "formik"
import { loginschema } from "../components/index";
//  import {background3} from "../../public/images/background3.jpg"


export const Login = () => {
    const initialValues = {
        email: "",
        password: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

    useFormik({
        initialValues: initialValues,
        validationSchema: loginschema,
})
    return (
        <div className='wrapper'>
            {/* <img src ={background3} alt=""/> */}
            {/* <img src="{ require('./images/background3.jpg")} */}
            <form onSubmit={handleSubmit}action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input  
                     type="text"
                     id="Email"
                        placeholder="Email"
                        
                         autoComplete="off"
                         onChange={handleChange}
                         onBlur={handleBlur}
                        
                    />
                    {/* <FontAwesomeIcon icon={faUser} />  */}
                </div>
                {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                    ) : null}
                <div className="input-box">

                    <input
                     type="Password"
                        placeholder="Password"
                         required
                         autoComplete="off"
                         onChange={handleChange}
                         onBlur={handleBlur}
                    />
                    {/* <FontAwesomeIcon icon={faLock} /> */}
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <NavLink to="/Forgotpassword">Forgot Password ?</NavLink>
                </div>
                <button type="submit">Login</button>
                <div className="signup-link">
                    <p>Don't have a account ?<NavLink to="/Signup">signup</NavLink></p>
                </div>
            </form>
        </div>
    )
}