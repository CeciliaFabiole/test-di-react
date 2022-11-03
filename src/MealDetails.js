import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useFetch } from "./useFetch"

export function MealDetails(){
    const {id} = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const {handleFetch, details}= useFetch(url)

    
    useEffect(()=>{
        handleFetch()
    })

    return(
        <div style={{background:'lightgray', padding:50, margin:20}}>
            {details && 
                <div style={{display:'flex', gap:40, alignItems:'center'}}>
                    <img src={details.strMealThumb} style={{width:200, height:200}} alt="immagine"/>
                    <div>
                        <h2>Piatto: {details.strMeal}</h2>
                        <p><b>Ricetta:</b> {details.strInstructions}</p>
                        <Link to='/'>Back</Link>
                    </div>
                </div>}
        </div>
    )
}