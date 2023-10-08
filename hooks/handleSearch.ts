import { useState } from "react"

export const useHandleSearch = ():[string,(value: string) => void] => {

    const [nameToSearch, setNameToSearch] = useState<string>("")

    const handleChange = (value: string) => {
        setNameToSearch(value)

    }
    return [nameToSearch,handleChange]
}