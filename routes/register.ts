import express from "express";
import registerController from '../controllers/register-controller';
import productsController from "../controllers/productsController";
const router = express.Router();


router.post('/', registerController, productsController.getproductos);


export default router;