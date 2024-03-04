import { Router } from "express";
import videoData from "../data/videoData.json";


const router = Router();
    

router.get('/', (req, res) => {
     res.json(videoData);
    });

module.exports = router;