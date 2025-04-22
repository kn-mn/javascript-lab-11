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
        return `Product: ${this.name} Price: ${this.price.toFixed(2)} Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        for (let product of products) {
            let discountedPrice = product.price * (1 - discount);
            product.price = Math.round(discountedPrice * 100) / 100;
        }
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

const product1 = new ProductProperties("Apple", 2.5, 50);
const product2 = new PerishableProductProperties("Orange", 3, 20, "2025-05-01");
const product3 = new PerishableProductProperties("Milk", 1.5, 10, "2025-05-01");

const products = [product1, product2, product3];

products.forEach(p => console.log(p.toString()));
ProductProperties.applyDiscount(products, 0.10);
console.log("After applying discount:");
products.forEach(p => console.log(p.toString()));

class StoreProperties {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory
            .reduce((total, product) => total + product.getTotalValue(), 0).toFixed(2);
    }
}

const store = new StoreProperties();
products.forEach(p => store.addProduct(p));
console.log(`Total inventory value: $${store.getInventoryValue()}`);
