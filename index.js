import 'dotenv/config';
import express from 'express';
import wordsRouter from './routers/wordsRouter.js';
import { createNewGame } from './models/gameModel.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	// récupérer le nombre total de parties jouées + le nombre total de partie gagnées.
	// partie perdues = total partie - parties gagnées. 

	res.render('index', { partiesTotales: 1425, partiesGagnées: 128, partiesPerdues:1425-128});
});
app.get('/pendu', (req, res) => res.render('pendu', {}));
app.get('/memory', (req, res) => res.render('memory', {}));

app.post('/games', async (req, res) => {
	const word = req.body.word;

	const newId = await createNewGame(word);

	res.status(201).json({ message: 'Partie créée', id: newId });
});

app.use('/words', wordsRouter);
app.use((req, res) => {
	res.json({ message: 'page 404' });
});

app.listen(process.env.PORT, () => {
	console.log(`serveur lancé sur le port ${process.env.PORT}`);
});
