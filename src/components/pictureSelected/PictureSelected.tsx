import React from 'react'


interface props {
    picture: string
    isSelected: boolean
    setPicture: React.Dispatch<React.SetStateAction<string>>
}

const PictureSelected = ({ isSelected, picture, setPicture }: props) => {
    return (
        <article onClick={() => setPicture(picture)} className={`${isSelected ? "opacity-100" : "opacity-20"}  w-10 h-10 flex items-center justify-center `} >
            <img src={picture} alt="detalle-producto" className='w-5/6 h-5/6' />
        </article>
    )
}

export default PictureSelected