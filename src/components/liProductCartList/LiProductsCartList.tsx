import { useEffect } from 'react'
import { BiSolidCartAdd } from 'react-icons/bi'
import { useHandleQuantity } from '../../../hooks/handleQuantity'
import { ProductAdded } from '../../../types/productAdded'
import ButtomComponentIcon from '../buttom/ButtomComponentIcon'
import LiProductsComponent from '../liProduct/LiProductsComponent'

interface props {
    product: ProductAdded
    updateQuatity: (id: number, quantity: number) => void
    deleteProduct: (product: ProductAdded) => void
}

const LiProductsCartList = ({ product, updateQuatity, deleteProduct }: props) => {


    const [numberCart, handleNumberCart] = useHandleQuantity(product.quantity)

    useEffect(() => {
        updateQuatity(product.id, numberCart)
    }, [numberCart])


    return (
        <LiProductsComponent numberCart={numberCart} product={product} handleNumberCart={handleNumberCart}>
                
                <ButtomComponentIcon
                   onClick={() => deleteProduct(product)} name="ELIMINAR" icon={BiSolidCartAdd}
                   className='text-marron-oscuro bg-rosa'
                    
                />
            
        </LiProductsComponent>    
    )
}

export default LiProductsCartList



