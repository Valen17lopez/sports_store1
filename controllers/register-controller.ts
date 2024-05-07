import User from '../Dto/UserDto';
import { Request, Response } from "express";
import UserService from '../services/UserServices';

let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      name,
      lastName,
      password,
      role,
      phoneNumber,
      address
    } = req.body;
    
    const registerUser = await UserService.register(new User(email, name, lastName, role, phoneNumber, password, address));   

    return res.status(201).send(
      { status: 'register ok' }
    );
   
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage });
    }else{
      return res.status(500).send({error})
    }
  }
}

export default register;
