const {z} = require("zod");

// creating an object schema
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must me atleast of 3 characters"})
        .max(255, { message: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must me atleast of 3 characters"})
        .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must me atleast of 10 characters"})
        .max(20, { message: "Phone must not be more than 20 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must me atleast of 7 characters"})
        .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = signupSchema;