import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(7).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "The password must be match"),
});
