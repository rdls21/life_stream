import Card from "@app/pages/components/cards";
import CartData from "../../../backend/data/videoData.json"
import Header from "@app/pages/components/header";
import "./globals.css"

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
    <Header />
    <main className="mainContainer">
      {Cards}
    </main>
    </>
  );
}
