import dayjs from "dayjs"

export const validationDatesTrip = (starts_at: Date, ends_at: Date) => {
    
    if(dayjs(starts_at).isBefore(new Date())) {
        throw new Error('Invalid trip start date')
    }

    if(dayjs(ends_at). isBefore(starts_at)) {
        throw new Error('Invalid trip end date')
    }
}