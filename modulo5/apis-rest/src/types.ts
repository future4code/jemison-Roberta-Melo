export enum UserType{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type Users = {
    id: number, 
    name: string, 
    email: string, 
    type: string,
    age: number
}