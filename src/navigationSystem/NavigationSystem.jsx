import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { FaWpexplorer } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiCameraMovie } from "react-icons/bi";
import "../style/style.css";
export default function NavigationSystem() {
  const [homeLink, setHomeLink] = useState("navigation_links ");
  const [explor_link, setExplorLink] = useState("navigation_links ");
  const [myList_link, setMyList] = useState("navigation_links ");
  const [profile_link, setProfile] = useState("navigation_links ");
  let path = useLocation();
  //controler
  useEffect(() => {
    const controler = (location) => {
      location.pathname === "/home"
        ? setHomeLink("navigation_links home_link")
        : setHomeLink("navigation_links");
      location.pathname === "/explor"
        ? setExplorLink("navigation_links explor_link")
        : setExplorLink("navigation_links");
      location.pathname === "/tv"
        ? setMyList("navigation_links mylist_link")
        : setMyList("navigation_links");
      location.pathname === "/mylist"
        ? setProfile("navigation_links profile_link")
        : setProfile("navigation_links");
    };

    if (path.pathname) {
      controler(path);
    }
  }, [path]);
  return (
    <>
      <ul className="ulbar">
        <li className="ulbar_links">
          <Link className={homeLink} to="/home">
            <MdHomeFilled />
            <h3>Home</h3>
          </Link>
        </li>
        <li className="ulbar_links">
          <Link className={explor_link} to="/explor">
            <FaWpexplorer />
            <h3>Explor</h3>
          </Link>
        </li>
        <li className="ulbar_links">
          <Link className={myList_link} to="/tv">
            <HiClipboardList />
            <h3>Tv Show</h3>
          </Link>
        </li>
        <li className="ulbar_links">
          <Link className={profile_link} to="/mylist">
            <CgProfile />
            <h3>My List</h3>
          </Link>
        </li>
      </ul>
    </>
  );
}
