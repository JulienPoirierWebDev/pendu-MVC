import connectToMongoDB from '../db/mongo.js';
export async function getAllWords() {
    let mongoClient;

        mongoClient = await connectToMongoDB(process.env.DB_URI);
        const words = await mongoClient.db(process.env.DB_NAME)
        .collection('words')
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

export async function totalWord() {

       let mongoClient = await connectToMongoDB(process.env.DB_URI);
        // const total = mongoClient.db.collection('words').countDocuments();
        const database = mongoClient.db(process.env.DB_NAME);
        const words = database.collection('words');
         const total = await words.estimatedDocumentCount();
        
       return total;

 
}

export async function getWordById(id) {
    let mongoClient = await connectToMongoDB(process.env.DB_URI);
    const database =  mongoClient.db(process.env.DB_NAME)
    const word = await database.collection('words').findOne({ ID: id });
    return word;
}


