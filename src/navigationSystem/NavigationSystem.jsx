import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { GiHomeGarage} from "react-icons/gi"

export default function NavigationSystem ({whatPage}){
    const id     = useParams()
    console.log(id);
    return (
        <div className="navigationSystem">
            navigation
        </div>
    )
}
