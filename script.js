class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        }
    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        return `Product: ${this.name} Price: ${this.price.toFixed(2)} Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        for(let product of products){
        let discountedPrice = (product.price - (product.price * discount))
        discountedPrice = (discountedPrice*100)/100
        product.price = discountedPrice;    
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

const sampleProduct1 = new ProductProperties("Apple", 2.5, 50);

const perishableProduct1 = new PerishableProductProperties("Orange", 3, 20, "2025-05-01");
const perishableProduct2 = new PerishableProductProperties("Milk", 1.5, 10, "2025-05-01");    


const products = [sampleProduct1, perishableProduct1, perishableProduct2];

console.log("Products:");
products.forEach(product => console.log(product.toString()));
ProductProperties.applyDiscount(products, 0.10);
console.log("\nProducts after applying discount:");
products.forEach(product => console.log(product.toString()));

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
    findProductByName(name) {
        const product = this.inventory.find(p => p.name === name);
        return product || null;
    }
}

let product1 = new ProductProperties("Pasta", 1.2, 30);
let product2 = new ProductProperties("Canned Tomatoes", 2.0, 15);
let product3 = new PerishableProductProperties("Cheese", 4.5, 5, "2025-05-01");
let product4 = new PerishableProductProperties("Yogurt", 1.8, 10, "2025-05-01");
let product5 = new PerishableProductProperties("Eggs", 2.5, 12, "2025-05-01");

let store = new StoreProperties();

let productList = [
    product1,
    product2,
    product3,
    product4,
    product5
];

for (const product of productList) {
    store.addProduct(product);
}

console.log("\nTotal before discount: $", store.getInventoryValue());
ProductProperties.applyDiscount(store.inventory, 0.15);
console.log("Total after 15% discount: $", store.getInventoryValue());

const lookup = "Cheese";
const found = store.findProductByName(lookup);
if (found) {
    console.log(`\n Found ${lookup}: ${found.toString()}`);
} else {
    console.log(`${lookup} not found.`);
}