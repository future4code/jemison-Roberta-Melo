import express, { Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/", (req: Request, res: Response) =>{
    res.send("Hello from Express");
})
type User = { 
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}
type Post ={
    id: number,
    title: string,
    body: string,
    userId: number,
}
const users: User[] = [
    {
        id: 1,
        name: "Bruno",
        phone: "(55)123456",
        email: "bruno@gmail.com",
        website: "www.brunoweb.com",
    },
    {
        id: 2,
        name: "Carla",
        phone: "(55)456123",
        email: "carla@gmail.com",
        website: "www.carlaweb.com",
    },
    {
        id: 3,
        name: "Eduardo",
        phone: "(55)456123",
        email: "eduardo@gmail.com",
        website: "www.eduardoweb.com",
    },
    {
        id: 4,
        name: "Heloisa",
        phone: "(55)456123",
        email: "heloisa@gmail.com",
        website: "www.heloisaweb.com",
    },
    {
        id: 5,
        name: "Miguel",
        phone: "(55)456123",
        email: "miguel@gmail.com",
        website: "www.miguelweb.com",
    }

]

//criação do array fora para facilitar a edição

const  posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 3,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 3,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        userId: 4,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        userId: 4,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        userId: 5,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        userId: 5,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
]
app.get("/users",(req: Request, res: Response) => {
    const allUsers = users.map((user) =>{
        return user
    })
    res.send(allUsers)
})
app.get("/posts", (req: Request, res: Response) => {
    const allPosts = posts.map((post) =>{
        return post
    })
    res.send(allPosts)
})
app.get("/posts/:userId", (req: Request, res: Response) =>{
    const userId = req.params.userId

    const getPosts = posts.filter((post) =>{
        return post.userId === Number(userId)
    })
    res.send(getPosts)
})

/*
app.delete("/posts/:postId", (req: Request, res: Response) => {
    const postId = req.params.postId
    const deletePost = posts.filter((post) => {
        return post.id !== Number(postId)
    })
    posts = deletePost
    res.send(posts)

})
app.delete("/users/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId
    const deletePost = users.filter((user) => {
        return user.id !== Number(userId)
    })
    users = deletePost
    res.send(users)

})
*/