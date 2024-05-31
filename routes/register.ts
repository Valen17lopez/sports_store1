import express from "express";
import registerController from '../controllers/register-controller';
import productsController from "../controllers/productsController";
import {validator, validatorParams } from "../Middleware/registerValidator";
const router = express.Router();


router.post('/', validatorParams, validator, registerController, productsController.getproductos);


export default router;


// email,
//       password,
//       name,
//       lastName,
//       phoneNumber,
//       domicilio