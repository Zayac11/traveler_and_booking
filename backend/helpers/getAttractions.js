function getAttractions (items, hotelId) {
    const mapped = items.map((object) => {
        return {
            name: object.name,
            drive_time: object.hotels.filter((hotel) => {
                return hotel.hotel.toString() === hotelId
            })[0].drive_time
        }
    })
    return mapped
}

module.exports = getAttractions;
