import { ButtonHTMLAttributes } from "react"


export interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: string
  onClick?: () => void
  className: string

}

const ButtomComponent = ({ className, name, onClick }: ButtonProps) => {
  return (
    <button 
      className={className} onClick={onClick}>{name}</button>
  )
}

export default ButtomComponent