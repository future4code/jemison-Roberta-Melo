import { userById } from "./User";

export interface UserRepository {
  getUserById(id: string): Promise<userById | undefined>;
}
