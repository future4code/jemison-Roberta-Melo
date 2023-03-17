import { UserRepository } from "../../src/model/UserRepository"
import { User } from "../../src/model/User"
import { userMock } from "./userMock"

export class UserDBMock implements UserRepository {
    public async createUser(user: User): Promise<void> { }

    public async getUserById(id: string): Promise<User | undefined> {
        return id === "id" ? userMock : undefined
    }

}