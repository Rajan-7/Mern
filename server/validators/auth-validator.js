const { z } = require("zod");

// Object Schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(6, { message: "Email most be atleast of 6 character" })
    .max(255, { message: "Email most not contain more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password most be 6 character long" })
    .max(50, {
      message: "Password most not contain more than 50 characters",
    }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(4, { message: "Name have to be atleast 4 character" })
    .max(255, { message: "Name can contain more than 6 character" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(4, { message: "Number most be atleast 10 digits" })
    .max(13, { message: "Number most not contain more than 13 digits" }),
});

// const loginSchema = z.object({
//   email: z.string({ message: "Invalid email or password" }),
//   password: z.string({ message: "Invalid password or email" }),
// });

module.exports = {loginSchema,signupSchema};
