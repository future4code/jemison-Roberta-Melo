import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";

export const userRouter = express.Router();
const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.get("/users/profile/:id", userController.getUserById);
