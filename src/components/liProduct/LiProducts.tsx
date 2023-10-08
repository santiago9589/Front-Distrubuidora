import { Product } from '../../../types/product'
import { BiSearch, BiSolidCartAdd } from 'react-icons/bi'
import { useHandleQuantity } from '../../../hooks/handleQuantity'
import { ProductAdded } from '../../../types/productAdded'
import LiProductsComponent from './LiProductsComponent'
import ButtomComponentIcon from '../buttom/ButtomComponentIcon'






interface props {
    product: Product
    addProduct: (product: ProductAdded, isValidate: boolean) => void
    detailsProduct: (route: string, product: Product) => void
}

const LiProducts = ({ product, addProduct, detailsProduct }: props) => {

    const [numberCart, handleNumberCart] = useHandleQuantity(0)

    return (
        <LiProductsComponent numberCart={numberCart} handleNumberCart={handleNumberCart} product={product}>
            <ButtomComponentIcon icon={BiSolidCartAdd} onClick={() => {
                addProduct({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    quantity: numberCart,
                    price: product.price,
                    pictureProduct: product.pictureProduct
                }, numberCart > 0)
            }}
                name='AGREGAR'
                className='text-marron-oscuro bg-rosa'
            />
            <ButtomComponentIcon icon={BiSearch}
                className='text-marron-oscuro bg-rosa'
                onClick={() => { detailsProduct(`/detalle/${product.id}`, product) }}
                name='DETALLE'
            />
        </LiProductsComponent>
    )
}

export default LiProducts



