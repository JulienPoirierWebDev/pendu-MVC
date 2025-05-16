import express from 'express';

import {
    getWords,
    getWord

} from '../controllers/wordController.js';

const router = express.Router();


router.get('/', getWords);
router.get('/random', getWord);


export default router;
