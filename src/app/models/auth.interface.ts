export interface UserLogin {
    email?:string;
    password?:string;
    role?: string;
}

export interface UserRegister{
    id?:string;
    name:string;
    email:string;
    password:string;
    role: string;
}