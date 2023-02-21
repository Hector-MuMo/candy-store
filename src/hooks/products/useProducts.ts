import React from 'react'
import productsApi from '.';

const useProducts = (page?: number, limit?: number) => {
    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState<Product>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({
        productsError: "",
        productError: ""
    });

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const result = await productsApi().getAll(page, limit)
            if (result.data) {
                setProducts(result.data)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, productsError: error })
        } finally {
            setIsLoading(false)
        }
    }

    const getProduct = async (productId: string) => {
        try {
            setIsLoading(true)
            const result = await productsApi().getOne(productId)
            if (result.data) {
                setProduct(result.data.product)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, productError: error })
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getProducts()
    }, []);

    return {
        products,
        product,
        isLoading,
        getProduct
    }
}

export default useProducts