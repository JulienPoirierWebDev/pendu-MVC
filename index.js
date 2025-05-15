import 'dotenv/config';
import express from 'express';
import wordsRouter from'./routers/wordsRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req,res) => res.send("Bienvenue"));


app.use('/words', wordsRouter);
app.use((req, res) => {
res.json({ message: 'page 404' });
});

app.listen(process.env.PORT, () => {
	console.log(`serveur lancé sur le port ${process.env.PORT}`);

})