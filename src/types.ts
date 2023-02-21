interface User {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    address: Address
    RFC?: string
}

interface Address {
    street: string,
    suburb: string,
    zip: string
    city: string,
    state: string,
    country?: string,
}

interface Product {
    id: string,
    name: string,
    description: string,
    brand: string,
    price: string,
    category: string,
    imgs: string[],
    buyingAmount?: number
}

interface Order {
    order_id: string,
    order_payment: string,
    userInfo: User,
    products: Product[],
    total_products: number,
    delivery_type: string,
    status: "active" | "cancelled" | "pending"
};

interface Inventory {
    product_id: string,
    stock: number,
    location: string,
}
