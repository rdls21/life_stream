import { Router } from "express";
import videoData from "../data/videoData";
import { ic } from "azle";


const router = Router();


router.use((req, res, next) => {
    if (req.method === 'POST' && req.path === '/uploadvideo') {

        if (ic.caller().isAnonymous()) {
            res.status(401).send("Usuario no autenticado");
        } else {
            next();
            res.send(ic.caller());
        }
    } else {
        next(); 
    }
});
    


const fs = require('fs').promises;

const videos = [...videoData];

router.post('/uploadvideo', async (req, res) => {

    let recibo = req.body;
    try{
        const nuevoElemento = {
            id: videoData.length + 1,
            ...recibo
            };

        videos.push(nuevoElemento);  
        res.status(200).send('Elemento agregado al archivo JSON correctamente');

    }catch(error){
        console.error('Error al agregar elemento al archivo JSON:', error);
        res.status(500).send('Error al agregar elemento al archivo JSON');

    }

});


router.get("/uploadvideo", (req, res) => {
    res.json(videos);
});


module.exports = router;