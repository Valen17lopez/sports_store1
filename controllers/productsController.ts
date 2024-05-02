// inventarioController.ts
import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

const getproductos = async (req: Request, res: Response) => {
    try {
        const productos = await UserRepository.getAllproducts(); 
        res.status(200).json({ productos });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export default { getproductos };
