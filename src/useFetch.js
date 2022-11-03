import { useState } from "react"

export function useFetch(url){
    const [lista, setLista] = useState([])
    const [details, setDetails] = useState()

    const handleFetch = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setLista([...data.meals])
        setDetails(...data.meals)
    }

    return{
        lista,
        handleFetch,
        details,
    }
}