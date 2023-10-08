import FooterComponent from '../src/components/footer/FooterComponent'
import { useHandleNavigate } from '../hooks/handleNavigate'
import ButtomComponent from '../src/components/buttom/ButtomComponent'
import logo from "./../src/assets/Logo originalmarron-jl.png"
import CarouselAutomatico from '../src/components/carousel/carrouselComponent'

const Home = () => {


  const [navigate] = useHandleNavigate()

  return (
    <section className='text-marron row-span-5 col-span-4 w-full h-full overflow-y-auto relative'>
      <section className='w-full flex flex-col justify-between'>
        <section className='relative lg:flex  w-full  h-[200px] md:h-[300px] lg:h-[400px] mb-8'>
          <img className='w-full h-full  bg-blanco' src={logo} alt="fondo" />
          <ButtomComponent className="absolute bottom-2 lg:bottom-5 left-2 lg:left-10 w-1/3 p-2 rounded-lg uppercase text-sm lg:text-xl bg-marron-oscuro text-rosa" name='Ver promociones' onClick={()=>console.log("hola")}/>
        </section>
        <CarouselAutomatico  />
        <ButtomComponent name="ver productos" onClick={() => navigate("/productos")} className='w-1/2 lg:w-1/3 bg-marron-oscuro text-rosa border-[0.2px] mx-auto rounded-lg p-2 mt-6 uppercase text-lg lg:text-2xl' />
      </section>
      <FooterComponent />
    </section>
  )
}

export default Home