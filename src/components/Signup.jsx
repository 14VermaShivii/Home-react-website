import React from "react";
import { NavLink } from "react-router-dom"
import { useFormik } from "formik";
import { signupschema } from "../components/index";


export const Signup = () => {
    const initialValues = {
        username:"",
        email: "",
        password: "",
        conformpassword:""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

    useFormik({
        initialValues: initialValues,
        validationSchema: signupschema,
})
    return (
        <div className='wrapper'>
           <form onSubmit={handleSubmit}action="">
                <h1>signUp</h1>
                <div className="input-box">
                    <input type="text"
                    id="username"
                        placeholder="Username"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                       
                    />
                </div>
                {errors.username && touched.username ? (
                        <p className="form-error">{errors.username}</p>
                    ) : null}

                <div className="input-box">
                    <input type="text"
                    id="Email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                </div>
                {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                    ) : null}


                <div className="input-box">
                    <input type="Password"
                    id="Password"
                        placeholder="Password" 
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                    ) : null}
                <div className="input-box">
                    <input type="Password"
                    id="conformpassword"
                        placeholder="Confirm Password"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.conformpassword && touched.conformpassword ? (
                        <p className="form-error">{errors.conformpassword}</p>
                    ) : null}

                <div className="remember-forgot py-4">
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
