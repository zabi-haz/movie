import axios from "axios";
import {useState , useEffect} from "react";
import { API_KEY } from "./API_KEY";
export default function useFetch ( type) {
    const [topMovie , setTopMovie ] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [err , setErr] = useState(null)
    let typeOfmovie = type;
    let api = `https://api.themoviedb.org/3/movie/${typeOfmovie}?api_key=${API_KEY}&language=en-USpage=all`
    

    const FetchingMovie = async () =>{
        const data = await axios.get(api)
        .then((res)=>{
            console.log(res)

        })
    }
    useEffect(()=>{
        FetchingMovie()
    },[api])
}