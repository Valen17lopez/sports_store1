import db from '../config/config-db';
import products from '../Dto/products';
import User from '../Dto/UserDto';

class UserRepository {
    static login(arg0: any): any {
        throw new Error("Method not implemented.");
    }

    static async add(user: User){
        const sql = 'INSERT INTO users (email, name, lastName, password, role, phoneNumber, address) VALUES (?,?,?,?,?,?,?)';
        const values = [user.email, user.name, user.lastName, user.password, user.role, user.phoneNumber, user.address ];
        return db.execute(sql, values);
    }

    static async auth(email: string){
        const sql = 'SELECT password FROM users WHERE email= ?';
        const values = [email];
        return db.execute(sql, values);
    }

    static async getUserPassword(email: string): Promise<string | null> {
        try {
            const sql = 'SELECT password FROM users WHERE email = ?';
            const values = [email];
            const result = await db.execute(sql, values);

        if (result && result.length > 0 && Array.isArray(result[0]) && result[0].length > 0) {
            const firstRow = result[0];
            const user = firstRow[0];

            if (user && 'password' in user) {
                return user.password;
            }
        }

        return null; 
        } catch (error) {
            console.error('Error al obtener la contraseña del usuario:', error);
            throw error;
        }
    }
   

    static async getAllproducts(): Promise<products[]> {
        try {
        const sql = 'SELECT * FROM product ';
        const [rows] = await db.execute(sql);
    
        if (!Array.isArray(rows)) {
            throw new Error('Los datos de los product no son válidos');
        }
    
        const products: products[] = rows.map((row: any) => {
            return {
                id: row.number,
                nombre_prod: row.string,
                precio: row.string,
                descripcion: row.string
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