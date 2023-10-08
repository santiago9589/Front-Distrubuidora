import { IconType } from "react-icons"

interface props{
    name:string
    icon:IconType
    content:string
  }
  
  const ItemsFooterComponent = ({name,icon:Icon,content}:props)=>{
    return (
      <section className='flex w-full '>
          <span className='w-20 md:w-25 md:text-xl md:mr-3  lg:w-32 lg:text-2xl lg:mr-10'>
            {name}:
          </span>
          <section className='flex items-center space-x-2  w-40 md:justify-between md:w-52 md:space-x-12 lg:w-64 lg:justify-start lg:space-x-24 '>
            <h3 className='w-[120px]  md:w-1/2  text-center md:text-xl lg:text-2xl'>{content}</h3>
            <Icon className="w-6 h-6 md:w-7 md:h-7" />
          </section>
        </section>
    )
  }

  export default ItemsFooterComponent