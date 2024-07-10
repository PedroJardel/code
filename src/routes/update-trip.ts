import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { validationDatesTrip } from "../validations/validation-dates-trip";
import { ClientError } from "../errors/client-error";

export async function updateTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().put('/trips/:tripId', {
        schema: {
            params: z.object({
                tripId: z.string().uuid()
            }),
            body: z.object({
                destination: z.string().min(4),
                starts_at: z.coerce.date(),
                ends_at: z.coerce.date(),
            })
        },
    }, async (request) => {
        const { destination, starts_at, ends_at } = request.body
        const { tripId } = request.params

        validationDatesTrip(starts_at, ends_at)

        const trip = await prisma.trip.findUnique({
            where: { id: tripId },
            include: {
                activities: {
                    orderBy: {
                        occurs_at: 'asc'
                    }
                }
            },
        })

        if (!trip) {
            throw new ClientError('Trip not found.')
        }

        await prisma.trip.update({
            where: { id: tripId },
            data: {
                destination,
                starts_at,
                ends_at
            }
        })

        return { tripId: trip.id }
    })
}