import clientPromise from "../lib/mongodb";

export default function listingsAndReviews({ listingsAndReviews }) {
    return (
        <div>
            <h1>Top 20 listingsAndReviews of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {listingsAndReviews.map((listingsAndReview) => (
                    <li>
                        <h2>{listingsAndReview.name}</h2>
                        <h3>{listingsAndReview.bed_type}</h3>
                        <p>{listingsAndReview.room_type}</p>
                        <p>{listingsAndReview.transit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_airbnb");

        const listingsAndReviews = await db
            .collection("listingsAndReviews")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { listingsAndReviews: JSON.parse(JSON.stringify(listingsAndReviews)) },
        };
    } catch (e) {
        console.error(e);
    }
}