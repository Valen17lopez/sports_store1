import db from '../config/config-db';
import products from '../Dto/products';
import User from '../Dto/UserDto';
import Auth from '../Dto/UserAutenticacion'
import Pedido from '../Dto/pedidosDto';

class UserRepository {
    static getUserPassword(email: string) {
        throw new Error('Method not implemented.');
    }

    static async add(user: User){
        const sql = 'INSERT INTO users (email, password, name, lastName, phoneNumber) VALUES (?,?,?,?,?)';
        const values = [user.email, user.password, user.name, user.lastName, user.phoneNumber ];
        return db.execute(sql, values);
    }

    static async logeo(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email= ?';
        const values = [auth.email];
        return db.execute(sql, values);
    }

    static async getAllproducts(): Promise<products[]> {
        try {
        const sql = 'SELECT * FROM products ';
        const [rows] = await db.execute(sql);
    
        if (!Array.isArray(rows)) {
            throw new Error('Los datos de los productos no son válidos');
        }
        
        const products: products[] = rows.map((row: any) => {
            return {
                nombre_prod: row.nombre_prod,
                precio: row.precio,
                descripcion: row.descripcion
            };
        });
        return products;
        
        } catch (error) {
            console.error('Error al obtener todas los productos:', error);
            throw error;
        }
    }

        //registrar pedido
        static async registrarPedido(pedido: Pedido){
            try {
                
                const sql = 'INSERT INTO pedidos (id_user, id_prod, direccion_pedido, estado_pedi ) VALUES (?, ?, ?, ?)';
                const values = [pedido.id_user, pedido.id_prod, pedido.direccion_pedido, pedido.estado_pedi];
    
                const [result] = await db.execute(sql, values);
    
                
                if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0){//affectedRows para ver cuantas filas fueron afectadas
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error('Error al registrar el pedido de domicilio:', error);
                throw error;
            }
        }
}


export default UserRepository;