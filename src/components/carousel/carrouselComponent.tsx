import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { api } from '../../../api/mock/api';
import { useEffect, useState } from "react"

const CarouselAutomatico = () => {

    const [dataProfile, setDataProfile] = useState<string[]>([])

    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Bucle infinito del carrusel
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000, // Intervalo de tiempo entre cada transición (en milisegundos)
        speed: 500, // Velocidad de la animación (en milisegundos)
        slidesToShow: 1, // Número de imágenes a mostrar al mismo tiempo
        slidesToScroll: 1 // Número de imágenes a desplazar en cada cambio
    };

    useEffect(() => {
        api.getFotosHome().then((res) => {
            setDataProfile(res)
        })
    }, [])


    return (
        <article className='w-3/4 h-1/2 mx-auto p-7 md:p-8'>
            <Slider {...settings}>
                {
                    dataProfile.map((picture) => {
                        return (
                            <section className='w-full'>
                                <img src={picture}  className="w-full" alt="Imagen 1" />
                            </section>
                        )
                    })
                }
            </Slider>
        </article>
    );
};

export default CarouselAutomatico;
