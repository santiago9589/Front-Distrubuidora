import { IconType } from 'react-icons'


interface propsButton {
    icon: IconType
    onClick: () => void
    name: string
    className:string

}

const  ButtomComponentIcon = ({ icon: Icon, onClick, name,className }: propsButton) => {
    return (
        <section className={`flex items-center justify-around ${className}  font-medium rounded-lg text-sm px-2 py-2 text-center w-[130px]` } onClick={onClick}>
            <p>{name}</p>
            <Icon className='w-6 h-6 ' />
        </section>

    )
}


export default ButtomComponentIcon