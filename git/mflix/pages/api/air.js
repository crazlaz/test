import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("sample_airbnb");

       const comments = await db
           .collection("listingsAndReviews")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(listingsAndReviews);
   } catch (e) {
       console.error(e);
   }
};