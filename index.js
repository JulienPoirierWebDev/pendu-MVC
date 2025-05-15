import 'dotenv/config';

import express from 'express';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => res.send("Bienvenue"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});