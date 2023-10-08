import { IconType } from "react-icons"

interface props{
    icon:IconType
    className:string
  }
  
  const IconWraper = ({icon:Icon,className}:props) =>{
    return (
      <Icon className={className}/>
    )
  }


  export default IconWraper