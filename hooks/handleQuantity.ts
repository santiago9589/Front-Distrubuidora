import { useState } from "react"

export const useHandleQuantity = (initalNumber:number):[number, (valueAdded: number) => void,React.Dispatch<React.SetStateAction<number>>] =>{

    const [numberCart,setNumberCart] = useState<number>(initalNumber)

    const handleNumberCart = (valueAdded:number)=>{
        if(numberCart >= 0 && valueAdded>0){
            setNumberCart((numberCart)=>numberCart+valueAdded)
        }else{
            if(valueAdded<0 && numberCart>=1){
                setNumberCart((numberCart)=>numberCart+valueAdded)
            }
        }
        
    }

    return [numberCart,handleNumberCart,setNumberCart]
}