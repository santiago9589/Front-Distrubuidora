import { Pedido } from "./../../types/pedido"
import { Product } from "./../../types/product"
import { Route } from "./../../types/routes"
import { BsFacebook, BsFillHouseFill, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { BsFillBagFill } from "react-icons/bs"
import { BsFillSendFill } from "react-icons/bs"
import cardAmerica from "../../src/assets/cardAmerica.png"
import cardMaster from "../../src/assets/cardMaster.png"
import carMercadoPago from "../../src/assets/cardMercadoPago.png"
import cardNaranja from "../../src/assets/cardNaranja.png"
import cardRapi from "../../src/assets/cardRapi.png"
import cardVisa from "../../src/assets/cardVisa.png"
import { userValidate } from "../../types/useValidated"
import { IconTypeNet } from "./../../types/iconsType"
import { MediosDePago } from "./../../types/mediosDePago"
import { NuestrasMarcas } from "./../../types/nuestrasMarcas"



const Products: Product[] = [
    {
        id: 1,
        name: "muanl",
        catogories:"adhesivo",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 5000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 2,
        name: "muan2",
        catogories:"adhesivo",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 6000,
        pictureProduct: "../../assets/cortauñas.jpg"
    }, {
        id: 3,
        name: "muan2",
        catogories:"pinzas para pestañas",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 2000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 4,
        name: "muan2",
        catogories:"pinzas para pestañas",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 4000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 5,
        name: "muan2",
        catogories:"shampoo",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 10000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 6,
        name: "muan2",
        catogories:"shampoo",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 3000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 7,
        name: "muan2",
        catogories:"removedor",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 12000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 8,
        name: "luis",
        catogories:"removedor",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 12000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 9,
        name: "ALBANIS",
        catogories:"removedor",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 12000,
        pictureProduct: "../../assets/cortauñas.jpg"
    },
    {
        id: 10,
        name: "PEDRO",
        catogories:"removedor",
        information: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa iure. Quam dolorem dolorum eaque reiciendis nostrum officia nobis aut repellat, magnam tempora adipisci magni. Fuga velit amet deleniti nihil itaque, sint alias minima aliquid saepe molestiae necessitatibus porro? Neque perferendis quidem sit necessitatibus, eius cumque ",
        quantityStock: 4,
        price: 12000,
        pictureProduct: "../../assets/cortauñas.jpg"
    }
]

const routes: Route[] = [
    {
        name: "inicio",
        route: "/",
        icon: BsFillHouseFill
    },
    {
        name: "productos",
        route: "/productos",
        icon: BsFillBagFill
    },
    {
        name: "contactanos",
        route: "/contactanos",
        icon: BsFillSendFill
    }
]


const icons: IconTypeNet[] = [
    {
        name: "instagram",
        icon: BsInstagram
    },
    {
        name: "facebook",
        icon: BsFacebook
    },
    {
        name: "twitter",
        icon: BsTwitter
    },
    {
        name: "youtube",
        icon: BsYoutube
    },
]


const pedido: Pedido[] = [
    {
        precio: 6000,
        fecha: new Date()
    },
    {
        precio: 6000,
        fecha: new Date()
    },
    {
        precio: 6000,
        fecha: new Date()
    }
]

const mediosPago: MediosDePago[] = [
    {
        name: "mercado pago",
        logo: carMercadoPago
    },
    {
        name: "america express",
        logo: cardAmerica
    },
    {
        name: "master card",
        logo: cardMaster
    },
    {
        name: "tarjeta naranja",
        logo: cardNaranja
    },
    {
        name: "rappi",
        logo: cardRapi
    },
    {
        name: "visa",
        logo: cardVisa
    }


]

const nuestrasMarcas: NuestrasMarcas[] = [
    {
        name: "mercado pago",
        logo: carMercadoPago
    },
    {
        name: "america express",
        logo: cardAmerica
    },
    {
        name: "master card",
        logo: cardMaster
    },
    {
        name: "tarjeta naranja",
        logo: cardNaranja
    },
    {
        name: "rappi",
        logo: cardRapi
    },
    {
        name: "visa",
        logo: cardVisa
    }


]

const categories: string[] = [
    "Adhesivo",
    "pinzas para pestañas",
    "shampoo",
    "removedor",
    "tratamiento post cuidados",
    "pestañas nagaruku",
    "pestañas SM",
    "Kits de lifting",
    "henna",
    "tinte henna",
    "descartables",
    "herramientas y accesorios",
    "laminado",
    "lifting color y regeneradores"
]

const price : string[] = [
    "de mayor a menor",
    "de menor a mayor"
]

const user: userValidate = {
    email: "juanua",
    password: "juanua",
    pictureProfile: "juanua",
    address: "juanua",
    name: "juanua",
    phone: "juanua"
}


const fotoCarousel: string[] = [
    carMercadoPago,
    cardAmerica,
    cardMaster
]





export const api = {
    getAllProductsMock: async (): Promise<Product[]> => {
        return Products
    },
    getAllRoutes: async (): Promise<Route[]> => {
        return routes
    },
    getAllPedidos: async (): Promise<Pedido[]> => {
        return pedido
    },
    addToCart: async (): Promise<Product> => {
        return Products[1]
    },
    deleteToCart: async (): Promise<boolean> => {
        return true
    },
    getAllPagos: async (): Promise<MediosDePago[]> => {
        return mediosPago
    },
    getAllMarcas: async (): Promise<NuestrasMarcas[]> => {
        return nuestrasMarcas
    },
    getUser: async (): Promise<userValidate> => {
        return user
    },

    getIcon: async (): Promise<IconTypeNet[]> => {
        return icons
    },
    getFotosHome: async (): Promise<string[]> => {
        return fotoCarousel
    },

    getDataHeaderFilter :async ():Promise<{categories:string[],price:string[]}>=>{

        return {categories,price}

    }

}