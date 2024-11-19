export default function ShareMealsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Dynamic page {params.slug}
      </h1>
    </main>
  );
}
