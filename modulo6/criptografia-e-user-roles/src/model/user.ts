enum role {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: role
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: role
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
   
}

export interface UpdateUserDTO {
   id: string,
   name: string,
   nickname: string
}

export interface AuthenticationData {
   id: string,
   role: string

}