import { BsDashLg, BsPlusLg } from 'react-icons/bs'

interface props{
    handleNumberCart:(number:number)=>void
    numberCart:number
    
}

const SumarRestarBotones = ({handleNumberCart,numberCart}:props) => {
    return (
        <section className='flex space-x-2 justify-between items-center w-fit box-border m-1 md:col-span-1 md:row-span-1 lg:w-32'>
            <BsDashLg size={10} onClick={() => handleNumberCart(-1)} className="w-8 h-8 md:h-10 md:w-10 bg-rosa-claro rounded-full text-marron-oscuro" />
            <p className='text-2xl text-rosa-claro'>{numberCart}</p>
            <BsPlusLg size={10} onClick={() => handleNumberCart(1)} className="w-8 h-8 md:h-10 md:w-10 bg-rosa-claro rounded-full text-marron-oscuro" />
        </section>
    )
}

export default SumarRestarBotones