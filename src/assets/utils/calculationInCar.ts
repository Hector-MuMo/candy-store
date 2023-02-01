const calculateSubtotalInCar = (productsInCar: Product[]) => {
    let total = 0

    for (const product of productsInCar) {
        let totalProduct = 0
        if (product && product.buyingAmount) {
            totalProduct = Number(product.buyingAmount) * Number(product.price)
        }

        total += totalProduct
    }

    return total
}

const calculateTotalProduct = (product: Product) => {
    let total = 0

    if (product && product.buyingAmount) {
        total = Number(product.buyingAmount) * Number(product.price)
    }

    return total
}

const calculateTotal = (productsInCar: Product[], deliveryCost: number) => {
    let subtotal = calculateSubtotalInCar(productsInCar)

    return subtotal + deliveryCost
}

export {
    calculateSubtotalInCar,
    calculateTotalProduct,
    calculateTotal
}