"use server";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  priority: z.string(),
  category:z.string(),
  dueDate: z.string(),
});

export async function AddTaskAction(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  const validatedFields = schema.safeParse(rawFormData);
  if (validatedFields.success) {
    console.log(validatedFields.data)
    const res = await fetch(`${process.env.BACKEND_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    })
      .then((res) => {return({ errors:{}, success: {message:"success"} });})
      .catch((error) =>{return({ errors:{formErrors:{error}}, success: {} }) ;});
  }
  if (validatedFields.error) {
    return { errors: validatedFields.error?.flatten(), success: {} };
  }
}
