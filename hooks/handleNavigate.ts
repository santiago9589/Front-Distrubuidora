import { useLocation } from "wouter"

export const useHandleNavigate = ():[(value:string)=>void, string] =>{

    const [location,navigate] = useLocation()  

    return [navigate,location]
}