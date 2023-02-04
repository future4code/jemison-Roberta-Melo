import app from "./app"
import UserController from "./endpoints/UserController"

const user = new UserController()

app.post('/user/signup', user.userRegister)
app.post("/user/login", user.userLogin)
app.get("/user/profile", user.userProfile)
