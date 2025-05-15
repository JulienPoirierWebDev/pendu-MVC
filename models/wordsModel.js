import connectToMongoDB from '../db/mongo.js';
export async function getAllWords() {
    let mongoClient;

        mongoClient = await connectToMongoDB(process.env.DB_URI);
        const words = await mongoClient.db('words')
        .collection('pendu')
        .find()
        .sort({ id: 1 })
        .toArray();
        return words;

}

