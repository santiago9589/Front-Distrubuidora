import { useSelector } from 'react-redux'
import { appState } from "./../types/appState"
import LiProducts from '../src/components/liProduct/LiProducts'
import { useHandleProduct } from "../hooks/handleProduct"
import FooterComponent from '../src/components/footer/FooterComponent'
import { useState } from "react"
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { BiCategoryAlt } from "react-icons/bi"
import { Product } from '../types/product'
import {useHandleFilterMenu} from "./../hooks/handleFilterMenu"

const Products = () => {

  const data = useSelector((state: appState) => state.appReducer.productReducer.filterProducts)
  const { nameToSearch, handleChange, detailsProduct, addProduct } = useHandleProduct()
  const [showOptions,setShowOptions,filterInfo] = useHandleFilterMenu()
  const [searchCategory, setSearchCategory] = useState<string>("")

  return (

    <section className='col-span-4 row-span-5 overflow-y-auto h-full w-full p-2' >
      <section>
        <header className=' flex shadow-2xl shadow-rosa w-full p-2 space-y-4 flex-col   
         border-[0.5px] rounded-xl'>
          <section className='flex w-full flex-col space-y-2'>
            <span className=' uppercase font-bold md:text-xl'>nombre de producto:</span>
            <input
              className='p-2 md:p-3 placeholder:text-gris  w-full md:w-full overflow-x-auto rounded-lg'
              type="text"
              value={nameToSearch}
              onChange={(e) => handleChange(e.target.value)}
              name="search"
              placeholder="Nombre de articulo"
            />
          </section>

          <section className='relative text-black w-full mx-auto'>
            <section className='bg-marron-oscuro p-2 text-gris rounded-md flex w-full items-center justify-between ' onClick={() => setShowOptions(!showOptions)}>
              <p className='uppercase text-xl font-medium'>ordenar por</p>
              {
                showOptions ? <BiSolidDownArrow size={23} /> : <BiSolidUpArrow size={23} />
              }
            </section>
            <ul className={` ${showOptions ? "flex" : "hidden"} absolute bg-rosa  w-full mr-4 flex flex-col space-y-2 rounded-lg p-2`}>

              <li className='w-full border-marron border-[0.3px] rounded-lg flex flex-col space-y-2 p-2'>
                <section className='w-full flex items-center justify-start space-x-2'>
                  <h3 className='text-lg uppercase'>categoria</h3>
                  <BiCategoryAlt className="w-6 h-6" />
                </section>
                <ul className='flex flex-col space-y-2'>
                  {
                    filterInfo.categories.map((item) => {
                      return (
                        <li key={item}
                          onClick={() => {
                            setSearchCategory(item)
                            setShowOptions(!showOptions)
                          }}
                        >
                          <p className={` ${searchCategory.includes(item) ? "bg-marron-oscuro text-rosa rounded-lg p-1" : ""} text-lg capitalize`}>{item}</p>
                        </li>
                      )
                    })
                  }
                </ul>

              </li>

              <button className='p-2 bg-rosa-oscuro-2 rounded-lg uppercase' onClick={() => {
                setSearchCategory("")
                setShowOptions(!showOptions)
              }}>
                Limpiar filtros
              </button>
            </ul>

          </section>


        </header>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 box-border gap-4 pt-2'>
          {
            data.filter((product: Product) => product.name.includes(nameToSearch))
              .filter((product: Product) => product.catogories.toLowerCase().includes(searchCategory.toLowerCase()))
              .map((product) => {
                return (
                  <LiProducts key={product.id} product={product}
                    addProduct={addProduct}
                    detailsProduct={detailsProduct} />
                )
              })
          }
        </ul>
      </section>
      <FooterComponent />
    </section>

  )
}

export default Products