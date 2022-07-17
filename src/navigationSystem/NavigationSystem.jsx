import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { BiSearchAlt} from "react-icons/bi"
import '../style/style.css'
export default function NavigationSystem (){
    let {id} = useParams();
    return (
        <nav className="navigatoin_bar_system">
            <ul className="ul_title_and_search_and_notifcation">
                <div className="title">
                    <Link className="title_link" to="/" >
                        movie
                    </Link>
                </div>
                <div className="search_and_notifcation">
                    <Link to="/explor">
                        <BiSearchAlt />
                    </Link>
                </div>
            </ul>
            <ul className="ulbar">
                <li className="ulbar_links">
                    <Link className="navigation_links home_link" to="/home">Home</Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links explor_link" to="/home/explor">Explor</Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links mylist_link" to="/home/mylist">My List</Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links mylist_link" to="/home/profile">profile</Link>
                </li>
            </ul>
        </nav>
    )
}
