import React, { useState,useEffect } from 'react'
import logo from "../../assets/Logo originalmarron-jl.png";
import { BsXLg } from "react-icons/bs";
import { Route } from '../../../types/routes';
import {api} from "../../../api/mock/api"
import IconAsideMenu from './iconAsideMenu';
import {useLocation} from "wouter"
import IconsContainer from '../iconsWraper/IconsContainer';


interface props {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const AsideMenu = ({ setShow, show }: props) => {

  const [data, setData] = useState<Route[]>([])

  useEffect(() => {
    api.getAllRoutes().then((res) => {
      return setData(res)
    })
  })

  const [location,navigate] = useLocation()


  return (

    <aside className={`lg:hidden z-20 absolute top-0 letf-0 w-3/4 md:w-2/4 h-full p-2 bg-rosa ${show ? "block" : "hidden"}`}>
      <header className='mb-4'>
        <section className='flex justify-between items-center p-2'>
          <img src={logo} className='w-12 h-12 rounded-full md:w-12 md:h-12' alt="logo" />
          <IconsContainer icon={BsXLg} size={30} onClick={() => setShow(!show)}/>
        </section>
      </header>
      <ul className='flex space-y-5 flex-col'>
        {
          data.map((route)=>{
            return (
              <IconAsideMenu key={route.name} icon={route.icon} route={route} handleClick={()=>{
                navigate(route.route)
                setShow(!show)
              }} isSelected={location === route.route}/>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default AsideMenu