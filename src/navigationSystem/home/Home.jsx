import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../useFetch"
import NavigationSystem from "../NavigationSystem"

const TopMovies = () =>{
    useFetch("popular" , "2")
}

const Home =() =>{
    const {id} = useParams();
    console.log(id);
    return(
        <div className="main_home">
            <NavigationSystem whatPage={id} />
            home
        </div>  
    )
}




export default Home