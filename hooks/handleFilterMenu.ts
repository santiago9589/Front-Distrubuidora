import {api} from "./../api/mock/api"
import {useState,useEffect} from "react"

export const useHandleFilterMenu= ():[boolean,React.Dispatch<React.SetStateAction<boolean>>
,{
    categories: string[];
    price: string[];
}]=>{

    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [filterInfo, setfilterInfo] = useState<{ categories: string[], price: string[] }>({
      categories: [], price: []
    })
  
    useEffect(() => {
      api.getDataHeaderFilter().then((res) => {
        setfilterInfo(res)
      })
    }, [])
  

    return [showOptions,setShowOptions,filterInfo]
}