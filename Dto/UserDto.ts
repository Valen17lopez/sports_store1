class User {
    email: string;
    name: string;
    lastName: string;
    password: string;
    role: string;
    phoneNumber: string;
    address: string;
    constructor(
        email: string, name: string,
        lastName: string, password: string, 
        role: string, phoneNumber: string, address: string
        
    ) {
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.role = role;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}

export default User;