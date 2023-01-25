import clientPromise from "../lib/mongodb";

export default function comments({ comments }) {
    return (
        <div>
            <h1>Top 20 comments of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {comments.map((comment) => (
                    <li>
                        <h2>{comment.name}</h2>
                        <h3>{comment.email}</h3>
                        <p>{comment.date}</p>
                        <p>{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const comments = await db
            .collection("comments")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { comments: JSON.parse(JSON.stringify(comments)) },
        };
    } catch (e) {
        console.error(e);
    }
}