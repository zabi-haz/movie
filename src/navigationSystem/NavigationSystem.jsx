import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { BiSearchAlt} from "react-icons/bi"
import {MdHomeFilled} from "react-icons/md"
import {FaWpexplorer} from "react-icons/fa"
import {HiClipboardList} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"
import '../style/style.css'
export default function NavigationSystem (){
    let {id} = useParams();
    return (
            <ul className="ulbar">
                <li className="ulbar_links">
                    <Link className="navigation_links home_link" to="/home">
                        <MdHomeFilled />
                        <h3 className="mian_home_link">
                            Home
                        </h3>
                    </Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links explor_link" to="/home/explor">
                        <FaWpexplorer />
                        <h3>
                        Explor
                        </h3>
                    </Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links mylist_link" to="/home/mylist">
                        <HiClipboardList />
                        <h3>
                            My List
                        </h3>
                    </Link>
                </li>
                <li className="ulbar_links">
                    <Link className="navigation_links mylist_link" to="/home/profile">
                        <CgProfile />
                        <h3>
                        profile
                        </h3>
                    </Link>
                </li>
            </ul>
    )
}
