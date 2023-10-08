import { createSlice } from "@reduxjs/toolkit"
import { ProductAdded } from "../../types/productAdded"
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

interface cartState {
    cart: ProductAdded[],
}

const initialAppState: cartState = {
    cart: [],

}

const cartSlice = createSlice({
    name: "cartState",
    initialState: initialAppState,
    reducers: {
        PROSS_GET_PRODUCT_CART(state) {
            state
        },
        PROSS_ADD_PRODUCT_CART(state, action: PayloadAction<ProductAdded>) {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (!existingProduct) {
                state.cart.push(action.payload);
                toast.success("Producto agregado!", {
                });
            }else{
                toast.info("El producto ya existe en el carrito!", {
                });
            }
        },
        PROSS_DELETE_PRODUCT_CART(state, action: PayloadAction<{ id: number }>) {
            state.cart = state.cart.filter((product) => {
                return product.id !== action.payload.id
            })
            toast.success("Producto borrado!", {

            });
        },
        PROSS_UPDATE_QUANTITY_PRODUCT_CART(state, action: PayloadAction<{ id: number, quantity: number }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].quantity = action.payload.quantity
            }
        },
    }
})
export const { PROSS_UPDATE_QUANTITY_PRODUCT_CART, PROSS_GET_PRODUCT_CART, PROSS_ADD_PRODUCT_CART, PROSS_DELETE_PRODUCT_CART } = cartSlice.actions
export default cartSlice.reducer