import { Product } from "./../../types/product"
import axios from "axios"

export const api = {
    getAllProducts: async (): Promise<Product[]> => {

        const allProducts = await axios.get(import.meta.env.VITE_GET_PRODUCTOS)

        console.log(import.meta.env.VITE_GET_PRODUCTOS)
        console.log(allProducts)

        const parsedProducts = allProducts.data.map((product:any)=>{
            return {
                id: product.id,
                name: product.nombre,
                catogories:product.categoria,
                description: product.descripcion,
                price: 5000,
                pictureProduct:`data:image/jpeg;base64,${product.image}`,
                quantityStock: 4,
                information: "hay que borrarlo"
            }
        })

        return parsedProducts
    },
    
}