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
    return(
        <div className="main_home">
            <NavigationSystem />
            home
        </div>  
    )
}




export default Home