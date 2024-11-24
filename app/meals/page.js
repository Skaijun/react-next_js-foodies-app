import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsPageLoading from "@/components/meals/meals-loading";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense fallback={<MealsPageLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
