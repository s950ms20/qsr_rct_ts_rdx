export interface OrderedProduct {
    product_id: string;
    ordered_quantity: number;
    price: number;
}

export class OrderedProduct {
    constructor(product_id: string, ordered_quantity: number, price: number) {
        this.product_id = product_id;
        this.ordered_quantity = ordered_quantity;
        this.price = price;
    }
}
export interface Order {
    orderedProducts: OrderedProduct[];
    user_id: string;
    status: string;
    order_number: string;
}

export class Order {
    constructor(orderedProducts: OrderedProduct[], user_id: string, status: string, order_number: string) {
        this.orderedProducts = orderedProducts;
        this.user_id = user_id;
        this.status = status;
        this.order_number = order_number;
    }
}
