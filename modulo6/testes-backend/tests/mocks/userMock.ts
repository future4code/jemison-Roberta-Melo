import { User, userRoles } from "../../src/model/User"

export const userMock = new User(
    "id",
    "UserMock",
    "email",
    "123456",
    userRoles.NORMAL
)