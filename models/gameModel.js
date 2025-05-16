
import 'dotenv/config';

async function createNewGame(newWord) {
	if (!newWord) {
		throw new Error('Merci de fournir un mot');
	}
	let mongoClient = await connectToMongoDB(process.env.DB_URI);
	const database = mongoClient.db(process.env.DB_NAME);

	const games = database.collection('games');

	const data = await games.insertOne({ word: newWord, victoire: false });

	return data.insertedId;
}