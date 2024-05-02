import express from "express";
import validateToken from "../Middleware/validaToken";
import productsController from "../controllers/productsController";

const router = express.Router();


router.get('/', validateToken, productsController.getproductos);

export default router;
