import express from 'express'
import { getMessages, sendMessage } from '../controllers/message.controller.js'
import protectRoute from '../middlewares/protectRoute.js';
const router = express.Router();


router.post('/send/:id/', protectRoute, sendMessage)  // (:) in the URL /send/:id is used to define a route parameter

router.get('/:id', protectRoute, getMessages)

export default router;
