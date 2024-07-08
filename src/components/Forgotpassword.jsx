import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik";
import { NavLink } from "react-router-dom"
import { forgotpasswordschema } from "../components/index"


export const Forgotpassword = () => {

    const initialValues = {
        password: "",
       conformpassword: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

    useFormik({
        initialValues: initialValues,
        validationSchema: forgotpasswordschema ,
})
    return (
        <div className='wrapper'>
             <form onSubmit={handleSubmit}action="">
            
                <h1>Forgotpassword</h1>
                <div className="input-box">
                    <input type="password"
                    id="password"
                     placeholder="password"
                     autoComplete="off"
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                </div>
                {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                    ) : null}

                <div className="input-box">

                    <input type="Password"
                    id="password"
                     placeholder="Confirm Password"
                     autoComplete="off"
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                    {/* <FontAwesomeIcon icon={faLock} /> */}
                </div>
                {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                    ) : null}
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