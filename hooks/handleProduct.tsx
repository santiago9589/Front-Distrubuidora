import { useDispatch } from "react-redux"
import { useHandleSearch } from "./handleSearch"
import { useEffect } from "react"
import {  PROSS_WATHC_PRODUCT_DETAILS, START_GET_PRODUCT } from '../store/redux/sliceProducts'
import { PROSS_ADD_PRODUCT_CART, PROSS_DELETE_PRODUCT_CART, PROSS_UPDATE_QUANTITY_PRODUCT_CART } from "../store/redux/sliceCart"
import { ProductAdded } from "../types/productAdded"
import { useHandleNavigate } from '../hooks/handleNavigate'
import { Product } from "../types/product"
import { toast } from 'react-toastify';

export const useHandleProduct = () => {

  const dispatch = useDispatch()
  const [navigate] = useHandleNavigate()
  const [nameToSearch, handleChange] = useHandleSearch()

  useEffect(() => {
    dispatch(START_GET_PRODUCT())
  }, [])

  const addProduct = (productAdded: ProductAdded, isValidate: boolean) => {
    isValidate ? dispatch(PROSS_ADD_PRODUCT_CART(productAdded)) : toast.error("No se puede agregar al carrito un productos con 0 unidades");
  }

  const detailsProduct = (route: string, product: Product) => {
    dispatch(PROSS_WATHC_PRODUCT_DETAILS(product))
    navigate(route)
  }

  const updateQuatity = (id: number, quantity: number) => {
    dispatch(PROSS_UPDATE_QUANTITY_PRODUCT_CART({ id, quantity }))
  }

    const deleteProduct = (productAdded: ProductAdded) => {
        dispatch(PROSS_DELETE_PRODUCT_CART(productAdded))
      }

  return { nameToSearch, handleChange, deleteProduct,detailsProduct, addProduct,updateQuatity,navigate}
}