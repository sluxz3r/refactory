class cart {
    constructor() {
        this.data = [
            {
                "item_id": 1,
                "price": 30000,
                "quantity":3
            },
            {
                "item_id": 2,
                "price": 10000,
            },
            {
                "item_id": 3,
                " price": 5000,
                "quantity": 2
            },
            {
                "item_id": 4,
                "price": 400,
                "quantity": 6
            }
        ]
        sum = 0
        quantity = 1
    }

    addItem(data) {
        this.data.push(data)
        if (data.quantity) {
            this.sum += data.price * quantity
        } else if (data.price) {
            this.sum += data.price
        }
    }

    removeItem(data) {
        id_item = data.item_id
        let index = ''
        this.data.map((item, i) => {
            if (item.item_id === id_item) {
                index = i
            }
        })
        this.data.splice(index, 1)

    }

    addDiscount(discount) {
        this.sum = this.sum * discount;
    }

    sumItems() {
        return this.data.length
    }

    sumQuantity() {
        let sumQuantity = 0
        this.data.map((item) => {
            sumQuantity += item.quantity
        })
        return sumQuantity
    }

    sumPrice() {
        let sumPrice = 0
        this.data.map((item) => {
            sumPrice += item.quantity * item.price
        })
        return sumPrice
    }

    showAll() {
        return this.data
    }
}