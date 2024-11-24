import ShareMealsForm from "@/components/meals/share-meals-form";
import classes from "./page.module.css";

export const metadata = {
  title: "NextLevel Share Food",
  description: "Share with others delicious recipes of meals.",
};

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <ShareMealsForm />
      </main>
    </>
  );
}
