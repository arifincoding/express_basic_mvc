class model {
    constructor(Collection) {
        this.Collection = Collection
    }
    findAll(callback) {
        this.Collection.find((err, data) => {
            if (err) {
                console.log(err)
            } else {
                callback(null, data)
            }
        })
    }

    // find document by ID

    findById(id, callback) {
        this.Collection.findById(id, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                callback(response)
            }
        })
    }

    // add document
    add(value, callback) {
        let car = new this.Collection(value)
        car.save(callback)
        callback
    }
    // update document by id

    updateById(id, updateData, callback) {
        this.Collection.updateOne({
            _id: id
        }, updateData, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                callback(response)
            }
        })
    }

    // delete document by id
    deleteById(id, callback) {
        this.Collection.deleteOne({
            _id: id
        }, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                callback(response)
            }
        })
    }
}

module.exports = model