import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Meals, created <span className={classes.highlight}>by you!</span>
        </h1>
        <p>Choose your fav recipe and cook it. It is easy and fun!!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Fav Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
