import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { validateDatesActivity } from "../validations/validation-dates-activity";
import { ClientError } from "../errors/client-error";

export async function createActivity(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/trips/:tripId/activities', {
        schema: {
            params: z.object({
                tripId: z.string().uuid()
            }),
            body: z.object({
                title: z.string().min(4),
                occurs_at: z.coerce.date(),
            })
        },
    }, async (request) => {
        const { title, occurs_at } = request.body
        const { tripId } = request.params

        const trip = await prisma.trip.findUnique({
            where: { id: tripId }
        })

        if(!trip) {
            throw new ClientError('Trip not found.')
        }

        validateDatesActivity(occurs_at, trip)

        const activity = await prisma.activity.create({
            data: {
                title,
                occurs_at,
                trip_id: tripId
            }
        })
        return {activityId: activity.id }
    })
}