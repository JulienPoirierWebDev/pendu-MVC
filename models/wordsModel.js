import connectToMongoDB from '../db/mongo.js';
export async function getAllWords() {
    let mongoClient;

        mongoClient = await connectToMongoDB(process.env.DB_URI);
        const words = await mongoClient.db('words')
        .collection('pendu')
        .aggregate([
            {
            $group:
            /**
            * specifications: The fields to
            * include or exclude.
            */
            {
            _id: null,
            expressions: {
            $push: "$M"
            }
            }
            }
            ])
        .toArray();
        return words;

}

