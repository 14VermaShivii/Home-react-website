import * as Yup from "yup";

export const loginschema = Yup.object({
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(2).required("Please enter your password")
})
export const forgotpasswordschema = Yup.object({
    password:Yup.string().min(2).required("Please enter your password"),
    conformpassword:Yup.string().min(2).required("Please enter your password")
})
export const signupschema = Yup.object({
    username:Yup.string().min(2).required("Please enter your username"),
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(2).required("Please enter your password"),
    conformpassword:Yup.string().min(2).required("Please enter your conformpassword")
})