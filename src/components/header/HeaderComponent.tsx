import { useEffect, useState } from 'react';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/Logo original-jl.png"
import AsideMenu from '../modalAsideMenu/asideMenu';
import AsideUser from '../modalAsideUser/asideUser';
import whatsappIcon from "./../../assets/whatsapp.png"
import { useHandleNavigate } from '../../../hooks/handleNavigate';
import IconsContainer from '../iconsWraper/IconsContainer';
import { useSelector } from 'react-redux';
import { appState } from '../../../types/appState';
import { Route } from '../../../types/routes';
import { api } from '../../../api/mock/api';
import ButtomComponentHeader from '../buttom/ButtomComponentHeader';


const HeaderComponent = () => {

  const data = useSelector((state: appState) => state.appReducer.cartReducer.cart)
  const [show, setShow] = useState<boolean>(false)
  const [showUser, setShowUser] = useState<boolean>(false)
  const [navigate,location] = useHandleNavigate()

  const [dataRoutes, setDataRoutes] = useState<Route[]>([])

  useEffect(() => {
    api.getAllRoutes().then((res) => {
      return setDataRoutes(res)
    })
  })

  return (
    <>
      <nav className={`  bg-gradient-to-r from-rosa via-rosa-claro to-rosa   relative box-border flex justify-between p-2 items-center col-span-4 row-span-1`}>
        <div className={`${show || showUser ? "opacity-20 bg-negro block absolute z-10 top-0 left-0 w-screen h-screen" : "hidden"}`} onClick={() => {
          setShow(false)
          setShowUser(false)
        }} />

        <section className='lg:hidden'>
          <IconsContainer icon={BsFillGrid3X3GapFill} size={40} onClick={() => setShow(!show)} />
        </section>
        <section className='w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center bg-marron-oscuro rounded-full p-1' onClick={() => navigate("/")}>
          <img className="w-full h-full rounded-full" src={logo} alt="logo" />
        </section>

        <section className=' p-2 hidden lg:flex lg:items-center lg:justify-between w-4/5  h-full'>
          {
            dataRoutes.map((route) => {
              return (
                <ButtomComponentHeader key={route.name} isSelected={location === route.route} name={route.name} onClick={()=>navigate(`${route.route}`)} className=' p-2 rounded-lg uppercase w-[140px]'/>
              )
            })
          }
        </section>

        <section className='relative' onClick={() => setShowUser(!showUser)}>
          {data.length > 0 && <article className='bg-rosa-oscuro text-rosa-claro rounded-full absolute w-6 h-6 right-0 bottom-0 flex items-center justify-center font-extrabold'>{data.length}</article>}
          <IconsContainer icon={FaShoppingCart} size={40} />
        </section>
      </nav>
      <AsideMenu setShow={setShow} show={show} />
      <AsideUser setShowUser={setShowUser} showUser={showUser} />
      <div className={`block fixed
       z-50 bottom-[500px] right-[5%] w-12 h-12 lg:w-20 lg:h-20 rounded-full`}>
        <a target='_blank' href={`https://wa.me/54${import.meta.env.VITE_NUMERO_CONTACTO}?text=${encodeURIComponent(`Hola tengo un consulta`)}`}>
          <img src={whatsappIcon} className='w-full h-full' alt="whatsapp" />
        </a>
      </div>
    </>
  )
}

export default HeaderComponent

