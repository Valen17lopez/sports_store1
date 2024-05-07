import db from '../config/config-db';
import products from '../Dto/products';
import User from '../Dto/UserDto';
import Auth from '../Dto/UserAutenticacion'


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, name, lastName, password, role, phoneNumber, address) VALUES (?,?,?,?,?,?,?)';
        const values = [user.email, user.name, user.lastName, user.password, user.role, user.phoneNumber, user.address ];
        return db.execute(sql, values);
    }

    static async logeo(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email= ?';
        const values = [auth.email];
        return db.execute(sql, values);
    }

    static async getAllproducts(): Promise<products[]> {
        try {
        const sql = 'SELECT * FROM product ';
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

}


export default UserRepository;