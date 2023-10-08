import {PiWarningBold} from "react-icons/pi"

const ErrorPage = () => {
  return (
    <section className='text-rojo col-span-4 row-span-5 w-full h-full flex flex-col items-center justify-center'>
        <PiWarningBold size={90}/>
        <p className='text-lg capitalize'>Ups...! pagina no encontrada</p>
    </section>
  )
}

export default ErrorPage