export enum userRoles {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: userRoles
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public getUserId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getUserRole() {
    return this.role;
  }
}

export interface userById {
  id: string;
  name: string;
  email: string;
  role: userRoles;
}
