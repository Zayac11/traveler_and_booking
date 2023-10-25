export const getDaysBetweenDates = (start: string, end: string): number => {
    const startDate = new Date(start).valueOf()
    const endDate = new Date(end).valueOf()

    let timeDifference
    if (startDate < endDate) {
        timeDifference = endDate - startDate
    } else {
        timeDifference = startDate - endDate
    }

    const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24))
    return daysDifference
}
