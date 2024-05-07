class User {
    private _email: string;
    private _name: string;
    private _lastName: string;
    private _password: string;
    private _role: string;
    private _phoneNumber: string;
    private _address: string;
    constructor(
        email: string, name: string,
        lastName: string, password: string, 
        role: string, phoneNumber: string, address: string
        
    ) {
        this._email = email;
        this._name = name;
        this._lastName = lastName;
        this._password = password;
        this._role = role;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }
    get email(): string{
        return this._email
    }
    get name(): string{
        return this._name
    }
    get lastName(): string{
        return this._lastName
    }
    get password(): string{
        return this._password
    }
    get role(): string{
        return this._role
    }
    get phoneNumber(): string{
        return this._phoneNumber
    }
    get address(): string{
        return this._address
    }
    set email(email:string){
        this._email = email
    }
    set name(name:string){
        this._name = name
    }
    set lastName(lastName:string){
        this._lastName = lastName
    }
    set password(password:string){
        this._password = password
    }
    set role(role:string){
        this._role = role
    }
    set phoneNumber(phoneNumber:string){
        this._phoneNumber = phoneNumber
    }
    set address(address:string){
        this._address = address
    }
}

export default User;