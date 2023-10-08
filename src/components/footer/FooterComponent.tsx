import {  BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from "react-icons/md"
import ItemsFooterComponent from './ItemFooterComponent'
import FooterTextComponent from './FooterTextComponent'
import IconWraper from './IconWraper'
import {useFooter} from "./../../../hooks/useHandleFooter"





const FooterComponent = () => {


  const  [mediosDePago,iconsRedes,nuestrasMarcas] = useFooter()


  return (
    <footer className=' bg-gradient-to-r from-rosa via-rosa-claro to-rosa  w-full flex flex-col justify-between space-y-6 md:space-y-10 p-2 mt-6 lg:space-y-0 lg:gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-1'>
      <section className='w-full flex box-border flex-col justify-start space-y-2 md:space-y-6 lg:col-span-1 '>
        <FooterTextComponent name="nuestras marcas" />
        <ul className='flex w-full space-x-3 md:space-x-5 lg:space-x-0 lg:flex lg:flex-col lg:justify-center lg:space-y-2'>
          {
           nuestrasMarcas.map((marca) => {
              return (
                <li className='lg:flex lg:space-x-2 lg:items-center' key={marca.logo}>
                  <img src={marca.logo} alt="marca" className='w-6 h-6 md:w-12 md:h-16 lg:mx-1 lg:my-1' />
                  <span className='lg:uppercase lg:text-xl hidden lg:block'>{marca.name}</span>
                </li>
              )
            })
          }
        </ul>
      </section>

      <section className='w-full flex box-border flex-col justify-start space-y-2 md:space-y-6 lg:col-start-2 '>
        <FooterTextComponent name="medios de pago" />
        <ul className='flex w-full space-x-3 md:space-x-5 lg:space-x-0 lg:flex lg:flex-col lg:justify-center lg:space-y-2'>
          {
            mediosDePago.map((medio) => {
              return (
                <li className='lg:flex lg:space-x-2 lg:items-center' key={medio.logo}>
                <img src={medio.logo} alt="marca" className='w-6 h-6 md:w-12 md:h-16 lg:mx-1 lg:my-1' />
                <span className='lg:uppercase lg:text-xl hidden lg:block'>{medio.name}</span>
              </li>
              )
            })
          }
        </ul>
      </section>
      <section className='w-full flex box-border flex-col justify-start space-y-2 md:space-y-6 lg:col-start-3 '>
        <FooterTextComponent name="Nuestras redes" />
        <ul className='flex w-full space-x-3 md:space-x-5 lg:space-x-0 lg:flex lg:flex-col lg:justify-center lg:space-y-2'>
        {
            iconsRedes.map((red) => {
              return (
                <li className='lg:flex lg:space-x-2 lg:items-center' key={red.name}>
                <IconWraper icon={red.icon} className='w-6 h-6 md:w-12 md:h-16 lg:mx-1 lg:my-1'/>
                <span className='lg:uppercase lg:text-xl hidden lg:block'>{red.name}</span>
              </li>
              )
            })
          }
        </ul>
      </section>
      <section className='w-full flex box-border flex-col justify-between space-y-2 md:space-y-6  lg:col-span-3 lg:row-start-2 '>
        <FooterTextComponent name="contactanos" />
        <section className='flex flex-col w-full md:space-y-2 lg:space-y-4 lg:space-x-0 '>
          <ItemsFooterComponent name='Correo' content='Test@test.com' icon={MdEmail} />
          <ItemsFooterComponent name='Telefono' content='1123445566' icon={BsTelephoneFill} />
        </section>
      </section>


    </footer>
  )
}

export default FooterComponent


