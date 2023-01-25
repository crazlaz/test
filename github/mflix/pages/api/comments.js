import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("sample_mflix");

       const comments = await db
           .collection("comments")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(comments);
   } catch (e) {
       console.error(e);
   }
};