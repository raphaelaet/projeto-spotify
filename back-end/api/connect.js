// JavaScript Assíncrono
// await async
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://raphaelaet:Jdbn2jkGcnieQY3m@cluster0.e0gf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyProject");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
