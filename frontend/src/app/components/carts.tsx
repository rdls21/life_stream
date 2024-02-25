import {FaStar} from "react-icons/fa"
import "./carts.css"

function Card(add){

    const images = (`/img/${add.item.coverImg}`)

    return(

        <div className="containerCart">
            <img src={images} alt=""></img>
            <div className="textCart">
                <div className="spanContainer">
                    <FaStar />
                    <span><b>{add.item.stats.rating}</b></span>
                    <span>{add.item.stats.tags}</span>
                </div>
                <p className="textTilte"><b>{add.item.title}</b></p>
                <p className="textDescription">{add.item.description}</p>
            </div>  
        </div>
    );
}

export default Card;