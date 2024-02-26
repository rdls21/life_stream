import {FaStar} from "react-icons/fa"
import "./cards.css"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

function Card(add: { item: { coverImg: any; stats: { rating: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; tags: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; }) {

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