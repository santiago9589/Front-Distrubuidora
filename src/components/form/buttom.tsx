

interface props {
  name: string
}

const ButtomForm = ({ name }: props) => {
  return (
    <button
      type="submit"
      className='rounded-lg
      bg-marron-oscuro text-rosa border-[0.2px]
    p-2
    text-xl
    uppercase
    w-full
    md:p-3
    md:text-2xl
    '>
      {name}
    </button>
  )
}

export default ButtomForm