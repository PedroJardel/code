import dayjs from "dayjs"
import { ClientError } from "../errors/client-error"

export const validationDatesTrip = (starts_at: Date, ends_at: Date) => {
    
    if(dayjs(starts_at).isBefore(new Date())) {
        throw new ClientError('Invalid trip start date')
    }

    if(dayjs(ends_at). isBefore(starts_at)) {
        throw new ClientError('Invalid trip end date')
    }
}