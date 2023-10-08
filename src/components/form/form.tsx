
import React from 'react'

interface props {
    handleSubmit: () => void
    children: React.ReactNode
}

const FormComponent = ({ children, handleSubmit }: props) => {
    return (
        <form className=" shadow-xl md:w-5/6 md:mx-auto flex space-y-3  rounded-xl flex-col p-4 md:p-6 w-full  h-full  justify-between lg:justify-center lg:w-1/2 overflow-y-auto" onSubmit={handleSubmit}>
            {children}
           
        </form>
    )
}

export default FormComponent