import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().refine((val) => /^\d{10}$/.test(val), {
    message: "Phone number must be exactly 10 digits.",
  }),
  requirement: z.string().min(10, { message: "Requirement details must be at least 10 characters." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
