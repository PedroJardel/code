import type { FastifyInstance } from "fastify"
import { ClientError } from "./errors/client-error"
import { ZodError } from "zod"

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorhandler: FastifyErrorHandler = (error, request, replay) => {
    if(error instanceof ZodError) {
        return replay.status(400).send({
            message: 'Invalid Input',
            errors: error.flatten().fieldErrors
        })
    }

    if(error instanceof ClientError) {
        return replay.status(400).send({
            message: error.message
        })
    }
    return replay.status(500).send('Internal Server Error!')
}