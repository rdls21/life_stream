import Link from "next/link";


export default function Page() {

  return (
    <header className="headerContainer">
       <div className="imgContainer">
            <Link href={"/"}><img alt="" src="/img/logoB.png"></img></Link>
        </div>
        <form className="search">
            <label htmlFor="searchbar"><input id="searchbar" type="text" /></label>
        </form>
        <div className="titleContainer">
          <Link href={'../books'} ><button type="submit" className="btn btn-primary">Search</button></Link>
        </div>
    </header>
  );
}
