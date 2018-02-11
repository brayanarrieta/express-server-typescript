import {Router} from 'express';
import * as cors from "cors";

// Controllers (route handlers)
import * as homeController from "../controllers/home";
import options from "./cors";

//router const
const router=Router();

//use cors middleware
router.use(cors(options));

//routes
router.get('/',homeController.index);

//enable pre-flight
router.options("*", cors(options));

export default router;