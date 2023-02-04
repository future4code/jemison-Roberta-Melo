export type user = {
   id: string,
   email: string,
   password: string,
   name: string,
   nickname: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}