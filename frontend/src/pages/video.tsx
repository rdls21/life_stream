import "./video.css"
import Header from "./components/header";
import videoData from "../../../backend/data/videoData.json";

export default function videoPlay(){

    
    
    return(
        <>
            <Header />
            <div className="video-container">
                <div className="playerContainer">
                    <div className="player">
                        <video controls>
                            <source src="/video/prueba.mp4" type="video/mp4" />
                            Tu navegador no admite el elemento de video.
                        </video>
                        <div className="videoDescription">

                        </div>
                    </div>

                    <div></div>
                </div>
                
                <div className="playLIstContainer"></div>
            </div>
        </>
    );

}