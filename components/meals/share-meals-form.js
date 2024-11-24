"use client";

import { useFormState } from "react-dom";

import { shareMeal } from "@/lib/actions";
import ImagePicker from "./image-picker";
import MealsFormSubmit from "./meals-form-submit";
import classes from "./share-meals-form.module.css";

const initialState = {
  message: "",
  errors: {},
};

export default function ShareMealsForm() {
  const [state, formAction] = useFormState(shareMeal, initialState);
  return (
    <form className={classes.form} action={formAction}>
      {state?.message && <p className={classes.error_title}>{state.message}</p>}
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
          {state.errors["name"] && (
            <span className={classes.field_error}>{state.errors["name"]}</span>
          )}
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
          {state.errors["email"] && (
            <span className={classes.field_error}>{state.errors["email"]}</span>
          )}
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        {state.errors["title"] && (
          <span className={classes.field_error}>{state.errors["title"]}</span>
        )}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
        {state.errors["summary"] && (
          <span className={classes.field_error}>{state.errors["summary"]}</span>
        )}
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required></textarea>
        {state.errors["instructions"] && (
          <span className={classes.field_error}>
            {state.errors["instructions"]}
          </span>
        )}
      </p>
      <div className={classes.wrapper}>
        <ImagePicker label="" name="image" />
        {state.errors["image"] && (
          <span className={classes.field_error}>{state.errors["image"]}</span>
        )}
        <p className={classes.actions}>
          <MealsFormSubmit>Save Meal</MealsFormSubmit>
        </p>
      </div>
    </form>
  );
}
