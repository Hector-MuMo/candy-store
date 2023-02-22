import React from 'react'
import inventoriesApi from '.';

const useInventories = (page?: number, limit?: number) => {
    const [inventories, setInventories] = React.useState([]);
    const [inventory, setInventory] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({
        inventoriesError: "",
        productError: ""
    });

    const getinventories = async () => {
        try {
            setIsLoading(true)
            const result = await inventoriesApi().getAll(page, limit)
            if (result.data) {
                setInventories(result.data)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, inventoriesError: error })
        } finally {
            setIsLoading(false)
        }
    }

    const getInventory = async (inventoryId: string) => {
        try {
            setIsLoading(true)
            const result = await inventoriesApi().getOne(inventoryId)
            if (result.data) {
                setInventory(result.data.product)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ ...errors, productError: error })
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getinventories()
    }, []);

    return {
        inventories,
        inventory,
        isLoading,
        getInventory
    }
}

export default useInventories 