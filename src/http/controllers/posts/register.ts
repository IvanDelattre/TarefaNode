import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaPostsRepository } from "src/repositories/prisma/prisma-post-repository";
import { PrismaUserRepository } from "src/repositories/prisma/prisma-user-repository";
import { UserAlreadyExists } from "src/use-cases/errors/usuer-already-exist";
import { RegisterPostUseCase } from "src/use-cases/posstes/register-post-use-case";
import { RegisterUseCase } from "src/use-cases/users/register-user-use-case";
import { z} from 'zod'


export async function register( request : FastifyRequest , reply : FastifyReply ) {
    const registerBodySchema = z.object({
        content : z.string(),
        userId : z.string().uuid()  ,
        created_at : z.string().transform((str) => new Date(str ) )

    })
    
    const { content , userId , created_at } = registerBodySchema.parse(request.body)
    
    try{
        const userRepository = new PrismaPostsRepository
        const registerUseCase = new  RegisterPostUseCase(userRepository) 

        registerUseCase.execute({
            content,
            created_at,
            userId
        })


    }catch(err){
        
        throw err 
    }
    
    
    return reply.status(201).send('Post criado com  sucesso ') ;


}
