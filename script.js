class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name} Price: ${this.price} Quantity: ${this.quantity}`;
    }
}

    class PerishableProductProperties extends ProductProperties {
        constructor(name, price, quantity, expirationDate) {
            super(name, price, quantity);
            this.expirationDate = expirationDate;
        }
    
        toString() {
            return `${super.toString()} Expiration Date: ${this.expirationDate}`;
        }
    }

const product1 = new PerishableProductProperties("Apple", 1, 5, "2025-04-29");
const product2 = new PerishableProductProperties("Milk", 2, 10, "2025-05-01");    


console.log("toString()");
product1.toString();
