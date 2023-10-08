import React from 'react'
import FooterComponent from './FooterComponent'


interface props {
    children: React.ReactNode
}

const WrapperFooter = ({ children }: props) => {
    return (
        <>
            {children}
            <FooterComponent />
        </>
    )
}

export default WrapperFooter