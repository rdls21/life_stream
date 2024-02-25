import {FaStar} from "react-icons/fa"
import "./carts.css"

function Card(add){

    const images = (`/img/${add.item.coverImg}`)
    let textBage
    if(add.item.openSpots === 0){
        textBage="SOULD OUT"
    }
    else if(add.item.location === "Online"){
        textBage="ONLINE"
    }
    

    return(

        <div className="containerCart">
            {textBage && <div className="cardBadge">{textBage}</div>}
            <img src={images} alt=""></img>
            <div className="textCart">
                <FaStar />
                <div className="spanContainer">
                    <span>{add.item.stats.rating}</span>
                    <span>({add.item.stats.reviewCount}) -</span>
                    <span>{add.item.location}</span>
                </div>
                <p>{add.title}</p>
                <p><b>From ${add.item.price}</b>/ preson</p>
            </div>  
        </div>
    );
}

export default Card;