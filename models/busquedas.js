const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'San José', 'Buenos Aires']

    constructor() {
        // Todo: leer DB
    }

    get paramsMapbox() {
        return {
            
                'access_token': process.env.MAPBOX_KEY, 
                'limit': 5,
                'language': 'es'
            
        
        }
    }

// primer método que me sirve para buscar una ciudad
// método petición asíncrona
    async ciudad(lugar = '') {


        try{
            // petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            // con este llamado se imprime el objeto de javascript
            console.log(resp.data);

            // retornar los lugares que se busquen
            return []

        } catch(error){
            return [];
        }
    }



}

module.exports = Busquedas;