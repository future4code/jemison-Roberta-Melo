import { UserDatabase } from "../data/UserDatabase";


export class UserBusiness {

    async createUser (user:any): Promise<void> {
        try {
            if (!user.name || !user.email || !user.password ) {
                throw new Error("Please fill all the fields")
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email")
            }

            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters")
            }

            const id = Date.now().toString()

            await new UserDatabase().createUser(id, user.email, user.name, user.password)

        } catch (error:any) {
            throw new Error( error.message || "Error creating user. Please check your system administrator.")
        }
    }

    async getAllUsers () {
        try {
            return await new UserDatabase().getAllUsers()

        } catch (error:any) {
            throw new Error( error.message || "Error getting users. Please check your system administrator.")
        }
    }

    async deleteUser (input: any): Promise<void> {
        try {
            if (!input) {
                throw new Error("Please provide the user id.")
            }

            await new UserDatabase().deleteUser(input.id)

        } catch (error:any) {
            throw new Error( error.message || "Error deleting user. Please check your system administrator.")
        }
    }
}