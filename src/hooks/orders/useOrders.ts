import React from 'react'
import ordersApi from '.';

const useOrders = (page?: number, limit?: number) => {
    const [orders, setOrders] = React.useState([]);
    const [order, setOrder] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({
        ordersError: "",
        productError: ""
    });

    const getOrders = async () => {
        try {
            setIsLoading(true)
            const result = await ordersApi().getAll(page, limit)
            if (result.data) {
                setOrders(result.data)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, ordersError: error })
        } finally {
            setIsLoading(false)
        }
    }

    const getOrder = async (orderId: string) => {
        try {
            setIsLoading(true)
            const result = await ordersApi().getOne(orderId)
            if (result.data) {
                setOrder(result.data.product)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, productError: error })
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getOrders()
    }, []);

    return {
        orders,
        order,
        isLoading,
        getOrder
    }
}

export default useOrders