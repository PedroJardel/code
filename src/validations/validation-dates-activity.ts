import { Trip } from "@prisma/client"
import dayjs from "dayjs"
import { ClientError } from "../errors/client-error"

export const validateDatesActivity = (occurs_at: Date, trip: Trip) => {

    if(dayjs(occurs_at).isBefore(trip.starts_at)) {
        throw new ClientError('Invalid activity start date')
    }

    if(dayjs(occurs_at).isAfter(trip.ends_at)) {
        throw new ClientError('Invalid activity start date')
    }
}