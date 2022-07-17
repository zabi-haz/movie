import axios from "axios"
import { useState } from "react"
import useFetch from "../../useFetch"

const TopMovies = () =>{
    useFetch("popular" , "2")
}

const Home =() =>{
    return(
        <div className="main_home">
            home
        </div>
    )
}




export default Home