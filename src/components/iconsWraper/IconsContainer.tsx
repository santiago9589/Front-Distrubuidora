import { IconType } from "react-icons"


interface props {
  icon: IconType
  size?: number
  onClick?: () => void
  className?:string
}

const IconsContainer = ({ className, onClick, icon: Icon, size }: props) => {
  return (
    <section className={className} onClick={onClick}>
      <Icon size={size} />
    </section>
  )
}

export default IconsContainer