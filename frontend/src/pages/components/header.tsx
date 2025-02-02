import Link from "next/link";
import "./header.css"
import { FaSearch } from "react-icons/fa";


export default function header(){
   
    const isLoggedIn = false
   
    return(
        <>
        <header className="headerContainer">
            <div className="imgContainer">
                <Link href={"/"}><img alt="" src="/img/logoB.png"></img></Link>
            </div>
            <form className="search">
                <label htmlFor="searchbar"><input id="searchbar" type="text" /></label>
                <FaSearch className="icon" />
            </form>
            { isLoggedIn ? (
            <div className="titleContainer">
                <Link href={'/'}><button type="submit" className="btn btn-primary">Log out</button></Link>
                <Link href={'/uploadvideo'}><button type="submit" className="btn btn-primary">Upload Video</button></Link>
            </div>
            ) : (
            <div className="titleContainer">
                <Link href={'../login'}><button type="submit" className="btn btn-primary">Log in</button></Link>
            </div>
            )}
        </header>
        </>
    );
}