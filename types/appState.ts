import { ProductAdded } from "./productAdded"
import { Product } from "./product"

export interface appState {
    appReducer:{
        cartReducer: {
            cart: ProductAdded[]
        },
        productReducer: {
            products: Product[],
            initialProduct: Product,
            productSelected:Product,
            errors:string,
            filterProducts: Product[]
        },
        contactReducer:{
            succesState:string
            failState:string
        }
    }
}