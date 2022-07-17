import axios from "axios"
import { useState } from "react"
import useFetch from "../../useFetch"

const TopMovies = () =>{
    useFetch("popular")
}

export default TopMovies