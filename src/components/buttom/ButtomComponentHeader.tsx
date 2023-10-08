
import ButtomComponent, { ButtonProps } from './ButtomComponent'

interface ButtonPropsHeader extends ButtonProps{
    isSelected:boolean
}
   


const ButtomComponentHeader = ({isSelected,...props}:ButtonPropsHeader) => {
  return (
    <div className={`${isSelected ? "bg-marron-oscuro text-rosa-claro rounded-xl" : ""}`}>
        <ButtomComponent {...props}/>
    </div>
  )
}

export default ButtomComponentHeader