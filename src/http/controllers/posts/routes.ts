import { FastifyInstance } from "fastify";
import { register } from "./register";
import { deletePost } from "./delete";
import { getPost } from "./get";
import { update } from "./update";
import { getPostByUser } from "./getByUser";
import { getAllPosts } from "./getAll";


export function postsRoutes( app : FastifyInstance ){
    app.post('/posts' , register ) ; 

    app.get('/posts' , getAllPosts)

    app.get('/postsByUser/:userId' , getPostByUser )

    app.delete('/posts/:id' , deletePost) ;

    app.get('/posts/:id' , getPost) ;

    app.patch('/posts/:id' , update ) ; 
    
}