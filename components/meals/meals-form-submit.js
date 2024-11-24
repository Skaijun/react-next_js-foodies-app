"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ children }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting.." : children}</button>
  );
}
