import express from "express";
import PedidoService from "../services/pedidoServices";

const router = express.Router();

const hacerPedido = async (req: express.Request, res: express.Response) => {

    //Desestructura las propiedades id_user, id_prod, direccion_pedido y estado_pedi del cuerpo de la solicitud (req.body). Si estado_pedi
    //no está presente en el cuerpo de la solicitud, se establece automáticamente en 'en espera'
    const { id_user, id_prod, direccion_pedido, estado_pedi= 'en espera'} = req.body; 
    
    try {
        const authorizationHeader = req.headers.authorization; // se intenta obtener el encabezado de autorización (Authorization) de la solicitud
        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Cabecera de autorización no proporcionada' });
        }

        //Llama al método pedirProductos del servicio PedidoService, pasando como argumentos id_user, id_prod, direccion_pedido y estado_pedi
        const pedidoRealizado = await PedidoService.pedirProductos(id_user, id_prod, direccion_pedido, estado_pedi); 

        if (pedidoRealizado) {
            return res.status(201).json({ message: 'Pedido realizado con éxito' });
        } else {
            return res.status(500).json({ message: 'Error al realizar el pedido' });
        }
    } catch (error) {
        console.error('Error al procesar el pedido a domicilio:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export default hacerPedido;


//async: permite el uso de funciones await 
// await: hace que la funcion se ejecute hasta que la promesa que esta esperando se resuelva o rechace