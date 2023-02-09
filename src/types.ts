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
    img: string,
    buyingAmount?: number
}
