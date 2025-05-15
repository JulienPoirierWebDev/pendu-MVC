import { MongoClient } from 'mongodb';

export async function connectToMongoDB() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        console.log('Connecting to MongoDB...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB failed!', error);
        process.exit();
    }
}

export default connectToMongoDB;