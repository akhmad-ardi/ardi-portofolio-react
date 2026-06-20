import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().nonempty({ error: "Name is required" }),
  email: z
    .email({ error: "Invalid email address" })
    .nonempty({ error: "Email is required" }),
  phone_number: z.string().nonempty({ error: "Phone number is required" }),
  message: z.string().nonempty({ error: "Message is required" }),
})
