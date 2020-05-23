class model {
    constructor(Collection) {
        this.Collection = Collection
    }

    sort(orderBy) {
        if (orderBy) {
            this.orderBy = orderBy
        } else {
            this.orderBy = {
                _id: 1
            }
        }
    }

    where(requestData) {
        if (requestData) {
            this.requestData = requestData
        } else {
            this.requestData = {}
        }
    }

    limit(lmt, offset) {
        if (lmt) {
            this.lmt = lmt
            if (offset) {
                this.offset = offset
            }
        }
    }

    select(selectField) {
        if (selectField) {
            this.selectField = selectField
        } else {
            this.selectField = ""
        }
    }

    find(callback) {
        this.Collection.find(this.requestData, this.selectField, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                callback(null, data)
            }
        }).sort(this.orderBy).skip(this.offset).limit(this.lmt)
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