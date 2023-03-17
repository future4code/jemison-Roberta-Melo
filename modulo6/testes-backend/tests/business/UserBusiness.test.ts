import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/errors/CustomError";
import { HashGeneratorMock } from "../mocks/hashGeneratorMock";
import { IdGeneratorMock } from "../mocks/idGeneratorMock";
import { tokenGeneratorMock } from "../mocks/tokenGeneratorMock";
import { UserDBMock } from "../mocks/userDBMock";

const userBusiness = new UserBusiness(
  new UserDBMock(),
  new tokenGeneratorMock(),
  new IdGeneratorMock(),
  new HashGeneratorMock()
);

describe("Testes getUserById", () => {
  test("Teste 1: Usuário não existe", async () => {
    expect.assertions(3);
    try {
      await userBusiness.getUserById("id1");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found.");
    }
  });

  test("Teste 2: Sucesso na requisição", async () => {
    expect.assertions(2);
    const result = await userBusiness.getUserById("id");
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "id",
      name: "UserMock",
      email: "email",
      role: "NORMAL",
    });
  });
});
