import { useState,useEffect } from "react"
import {MediosDePago} from "../types/mediosDePago"
import {IconTypeNet} from "../types/iconsType"
import {NuestrasMarcas} from "../types/nuestrasMarcas"
import {api} from "../api/mock/api"

export const useFooter = ():[MediosDePago[],IconTypeNet[],NuestrasMarcas[]] =>{
    const [mediosDePago, setMediosDePago] = useState<MediosDePago[]>([])
    const [iconsRedes, setIconsRedes] = useState<IconTypeNet[]>([])
    const [nuestrasMarcas, setNuestrasMarcas] = useState<NuestrasMarcas[]>([])
  
    useEffect(() => {
      api.getAllPagos().then((res) => {
        setMediosDePago(res)
  
      })
      api.getIcon().then((res) => {
        setIconsRedes(res)
      })
  
      api.getAllMarcas().then((res) => {
        setNuestrasMarcas(res)
      })
    }, [])

    return [mediosDePago,iconsRedes,nuestrasMarcas]
}