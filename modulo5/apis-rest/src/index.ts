import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { Users, UserType } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/user", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    if (!users) {
      res.statusCode = 404;
      throw new Error("Não existe uma lista de usuário!");
    }
    if (!name) {
      res.statusCode = 401;
      throw new Error("Não foi encontrado o usuário na lista!");
    }
    const list = users
      .map((usuarios) => {
        return usuarios;
      })
      .filter((usuarios) => {
        return name ? usuarios.name.includes(name) : true;
      });
    res.status(200).send(list);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});
//a) Método HTTP utilizado: GET
//b) A entidade é feita através do caminho path naquele endpoint

//2
app.get("/users/types", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const types: string = req.query.types as string;
    const usersTypes = users.filter((user) => user.type === types);
    if (!usersTypes) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }
    res.status(200).send(usersTypes);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//a) Parâmetro de busca - query
//b)

//3
app.get("/users/name", (req: Request, res: Response) => {
  let errorCode = 400;
  const userName = req.query.name as string;
  try {
    if (!userName) {
      errorCode = 422;
      throw new Error("Não tem usuário com este nome");
    }

    const usersNames = users.find(
      (user) => user.name.toLowerCase() === userName.toLowerCase()
    );
    if (!usersNames) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }
    const NameUsers = users.filter((user) => {
      return userName.toLowerCase() === user.name.toLowerCase();
    });

    res.status(200).send(NameUsers);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//a) Parâmetro query tratando de busca
//b)

//4
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, email, type, age } = req.body;

    if (!name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Verifique se está correto as informações!");
    }
    if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
      errorCode = 422;
      throw new Error(
        "Tipo de usuário não encontrado. Fornecer ADMIN ou NORMAL."
      );
    }

    users.push({
      id: Date.now(),
      name,
      email,
      type,
      age,
    });

    res.status(201).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//a)Deu erro
//b)O put atualiza uma requisição atual, no momento não é necessário o uso.

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
