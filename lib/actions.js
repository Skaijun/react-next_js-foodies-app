"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { saveMeal } from "./meals";
import formValidation from "@/util/formValidation";

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  const formErrors = {};
  const { validateTextInput, validateEmail, validateImage } = formValidation;
  validateTextInput(meal.title, "title", formErrors);
  validateTextInput(meal.creator, "name", formErrors);
  validateTextInput(meal.summary, "summary", formErrors);
  validateTextInput(meal.instructions, "instructions", formErrors);
  validateEmail(meal.creator_email, "email", formErrors);
  validateImage(meal.image, "image", formErrors);

  if (Object.keys(formErrors).length) {
    return { message: "Invalid data provided", errors: formErrors };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
