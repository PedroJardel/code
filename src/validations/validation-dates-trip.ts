import { Trip } from "@prisma/client"
import dayjs from "dayjs"

export const validationDatesTrip = (starts_at: Date, ends_at: Date) => {
    
    if(dayjs(starts_at).isBefore(new Date())) {
        throw new Error('Invalid trip start date')
    }

    if(dayjs(ends_at). isBefore(starts_at)) {
        throw new Error('Invalid trip end date')
    }
}

export const validateDatesActivity = (occurs_at: Date, trip: Trip) => {

    if(dayjs(occurs_at).isBefore(trip.starts_at)) {
        throw new Error('Invalid activity start date')
    }

    if(dayjs(occurs_at).isAfter(trip.ends_at)) {
        throw new Error('Invalid activity start date')
    }
}