import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()
app.post("/user", userController.createUser)
app.get("/all", userController.getAllUsers)
app.delete("/:id", userController.deleteUser)