import {
    getAllWords,
  
} from '../models/wordsModel.js';

export async function getWords(req, res) {
    try {
        const words = await  getAllWords();
        res.status(200).json(words);
    } catch (err) {
        console.error('Erreur getAllWords:', err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}