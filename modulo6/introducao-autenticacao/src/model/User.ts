class User {
    private id: string 
    private email: string 
    private password: string

    constructor(
      id: string,
      email: string,
      password: string
    ) 
    {
        this.id = id,
        this.email = email
        this.password = password
    }
    public getId(){
        return this.id
    }

    public getName(){
        return this.email
    }
    public getPassword(){
        return this.password
    }

}

export default User