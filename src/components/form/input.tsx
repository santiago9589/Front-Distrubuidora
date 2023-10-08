import React from 'react'
import { IconType } from 'react-icons';
import { AiFillWarning } from "react-icons/ai"

interface props {
    name: string
    type: string
    handleChange: (e: React.ChangeEvent) => void;
    value: string
    touched: boolean
    errors: string,
    placeholder: string
    icon: IconType
    handleBlur: (e: React.FocusEvent<any, Element>)=>void
}

const InputComponent = ({ name, type, handleChange, touched, errors, value, placeholder, icon: Icon,handleBlur }: props) => {
    return (
        <>
            <label htmlFor={name} className='text-xl capitalize md:text-3xl'>{name}*</label>
            <section className='w-full flex justify-between items-center  rounded-lg space-x-1'>
                <input
                    className='p-2 md:p-3 w-full overflow-x-auto rounded-lg placeholder:text-gris'
                    type={type}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                />
                <Icon size={50} className={`${ touched && errors ? "text-rojo px-2" : "px-2"}`} />
            </section>
            {touched && errors && (<div className='text-rojo text-sm md:text-lg font-semibold uppercase flex space-x-1 items-center'>
                <p>{errors}</p>
                <AiFillWarning size={20} />
            </div>)}
        </>
    )
}


export default InputComponent