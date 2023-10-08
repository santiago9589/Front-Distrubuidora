import {Route} from "./../../../types/routes"
import {IconType} from "react-icons"

interface props{
    icon:IconType
    handleClick:()=>void
    route:Route
    isSelected:boolean
}

const IconAsideMenu = ({icon:Icon,handleClick,route,isSelected}:props) => {
  return (
    <li className={`${isSelected ? "bg-marron-oscuro text-rosa" : ""}  border-negro pl-2 py-2 rounded-md flex items-center space-x-2 `} onClick={()=>handleClick()}>
    <Icon className="w-6 h-6 md:w-8 md:h-8"/>
    <p className='w-32 uppercase text-lg md:text-xl'>{route.name}</p>
  </li>
  )
}

export default IconAsideMenu