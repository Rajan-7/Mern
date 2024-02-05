const { z } = require("zod");

// Object Schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(6, { message: "Name have to be atleast 6 character" })
    .max(255, { message: "Name can contain more than 6 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(6, { message: "Email most be atleast of 6 characters" })
    .max(255, { message: "Email most not contain more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(4, { message: "Number most be atleast 10 digits" })
    .max(13, { message: "Number most not contain more than 13 digits" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password most be atleast 6 character long" })
    .max(50, { message: "Password most not contain more than 50 character" }),
});

module.exports = signupSchema;
