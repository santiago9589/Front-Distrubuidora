import { IconType } from 'react-icons'
import ButtomComponentIcon from './ButtomComponentIcon'


interface propsButton {
    icon: IconType
    onClick: () => void
    name: string
    classNameColor: string

}

const ButtomComponentIconColor = ({ icon: Icon, onClick, name, classNameColor }: propsButton) => {
    return (
        <section className={classNameColor} >
            <ButtomComponentIcon className='text-rosa' icon={Icon} onClick={onClick} name={name} />
        </section>

    )
}


export default ButtomComponentIconColor