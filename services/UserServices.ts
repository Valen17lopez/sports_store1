import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import generateHash from '../helpers/generateHash';
import Auth from '../Dto/UserAutenticacion';
import bcrypt from "bcryptjs";



class UserService {

    static async register(user: User) {
        user.password = await generateHash(user.password); //hash contraseña y actualiza la contraseña
        return await UserRepository.add(user); // agrega el usuario a la base de datos y retorna el resultado.
    }

    static async auth(auth: Auth){ // Resive el Auth como parametro
        const result: any = await UserRepository.logeo(auth);//Llama al método logeo para autenticar al usuario y almacena el resultado
        
        if (result[0].length > 0){ // verificamos si hay un usuario en resultado
            const isPasswordValid = await UserService.comparePassword(auth.password, result[0][0].password); //compara la contrseña
            
            if(isPasswordValid){
            
                return {logged: true, status: "Succesful Authentication"}
            } else {
                return {logged: false, status: "Incorrect password"}
            }
        } else {
            return {logged: false, status: "Incorrect username"}
        }
    }
    

    private static async comparePassword(password: string, hashedPassword: string) {
       
        
        return await bcrypt.compare(password, hashedPassword);
    }
   
}

export default UserService;
