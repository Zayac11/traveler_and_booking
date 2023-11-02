function getModelData (array, foundItems) {
    return array.filter((item) => {
        if(typeof foundItems === 'string') {
            return foundItems === item._id.toString()
        }
        return foundItems.includes(item._id)
    })
}

module.exports = getModelData;
