import {Router, Request, Response} from 'express';

// Controllers (route handlers)
import * as homeController from "../controllers/home";


const router=Router();

router.get('/',homeController.index);

export default router;