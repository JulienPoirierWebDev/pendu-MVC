import {
    getAllWords,
    getWordById,
    totalWord
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

export async function getWord(req, res) {
    try {
        const total=await totalWord();
        const random = Math.floor(Math.random() * total) + 1;
        const word = await  getWordById(random);
        res.status(200).json(word);
    } catch (err) {
        console.error('Erreur getAllWords:', err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}