import axios from "axios";
import {useState , useEffect} from "react";
import { API_KEY } from "./API_KEY";
export default function useFetch ( type ,page) {
    const [data , setData ] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [err , setErr] = useState(null)
    let typeOfmovie = type;
    let api = `https://api.themoviedb.org/3/movie/${typeOfmovie}?api_key=${API_KEY}&language=en-USpage=${page}`


    const FetchingMovie = async () =>{
        const data = await axios.get(api)
        .then((res)=>{
            console.log(res)
            setLoading(false)
            setData(res.data.results)
        })
        .catch((err)=>{
            setLoading(false);
            setErr("err"+err)
        })
    }
    useEffect(()=>{
        FetchingMovie()
    },[api])
    return {data , loading , err}
}