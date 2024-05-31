import UserRepository from '../repositories/UserRepository';
import PedidoProducto from '../Dto/pedidosDto';

class PedidoService {

    static async pedirProductos(id_user: number,id_prod: number, direccion_pedido: string, estado_pedi:string){
        try {
            const pedido: PedidoProducto = {//creamos un objeto pedido que implementa pdidoProducto y contiene los parametros
                id_user,
                id_prod,
                direccion_pedido,
                estado_pedi
            };
            const result = await UserRepository.registrarPedido(pedido);//llamamos el metodo registrar pedido de UserRepository
            return result;
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }
}

export default PedidoService;
