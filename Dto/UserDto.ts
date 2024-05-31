class User {
    private _email: string;
    private _password: string;
    private _name: string;
    private _lastName: string;
    private _phoneNumber: string;
    constructor(
        email: string, password: string, name: string,
        lastName: string, phoneNumber: string
        
    ) {
        this._email = email;
        this._password = password;
        this._name = name;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }
    get email(): string{
        return this._email
    }
    get password(): string{
        return this._password
    }
    get name(): string{
        return this._name
    }
    get lastName(): string{
        return this._lastName
    }
    get phoneNumber(): string{
        return this._phoneNumber
    }
    
    set email(email:string){
        this._email = email
    }
    set password(password:string){
        this._password = password
    }
    set name(name:string){
        this._name = name
    }
    set lastName(lastName:string){
        this._lastName = lastName
    }
    set phoneNumber(phoneNumber:string){
        this._phoneNumber = phoneNumber
    }
}

export default User;