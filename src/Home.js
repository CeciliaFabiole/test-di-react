import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

export function Home(){
    const [input, setInput] = useState('')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    const {lista, handleFetch} = useFetch(url)

    

    return(
        <div>
            <div style={{display:'flex', justifyContent:'center', marginTop:50, gap:10}}>
                <input value={input} onChange={(e=>setInput(e.target.value))} placeholder="CERCA"/>
                <button onClick={handleFetch}>Search</button>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:50, gap:20}}>
                {lista.map((item,id) => 
                    <Link to={`/${item.idMeal}`} style={{color:'inherit', display:'flex', alignItems:'center', gap:10}}>
                        <img src={item.strMealThumb} style={{width:30,height:30}} alt="immagine"/>
                        <li key={id} style={{listStyle:'none'}}>
                            {item.strMeal} 
                        </li>
                    </Link>)}
            </div>
        </div>
    )
}