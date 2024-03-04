import { Server } from 'azle';
import cors from "cors";
import express from 'express';
// import videoData from './data/videoData2';

export default Server(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    
    app.use(require("./routes/home"))
    
    app.use(require("./routes/uploadvideo"))


    // app.get('/uploadvideo', (req, res) => {
    //     res.json(videoData);
    //   });

    // app.get('/whoami', (req, res) => {
    //     res.statusCode = 200;
    //     res.send(ic.caller());
    // });

    // app.get('/health', (req, res) => {
    //     res.send().statusCode = 204;
    // });

    return app.listen();
});
