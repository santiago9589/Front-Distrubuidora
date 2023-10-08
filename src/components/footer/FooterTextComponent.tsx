interface props {
    name: string
  }
  
  const FooterTextComponent = ({ name }: props) => {
    return (
      <h3 className='text-lg md:text-xl uppercase lg:text-2xl text-rosa-claro bg-rosa-oscuro-2 rounded-lg p-2'>{name}</h3>
    )
  }
  
export default FooterTextComponent  