import { S3 } from "@aws-sdk/client-s3";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
// import fs from "node:fs";

const s3 = new S3({
  region: "eu-central-1",
});
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(identifier) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(identifier);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = meal.slug + "." + extension;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);

  const imageBuffer = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: process.env.S3_BUCKETNAME,
    Key: fileName,
    Body: Buffer.from(imageBuffer),
    ContentType: meal.image.type,
  });

  // stream.write(Buffer.from(imageBuffer), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES
    (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `
  ).run(meal);
}
