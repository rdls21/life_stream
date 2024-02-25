import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Card from "./components/carts";
import CartData from "./data/videoData"


export default function Page() {

  const Cards = CartData.map(data => {
    return( 
      <Card 
        key={data.id}
        item={data}
      />
    )
  })



  return (
    <> 
      <header className="headerContainer">
          <div className="imgContainer">
              <Link href={"/"}><img alt="" src="/img/logoB.png"></img></Link>
          </div>
          <form className="search">
              <label htmlFor="searchbar"><input id="searchbar" type="text" /></label>
              <FaSearch className="icon"/>
          </form>
          <div className="titleContainer">
            <Link href={'../ic-connect'} ><button type="submit" className="btn btn-primary">Log in</button></Link>
          </div>
      </header>
      <main className="mainContainer">
        {Cards}
      </main>
    </>
  );
}
