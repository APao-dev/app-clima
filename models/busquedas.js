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

    get paramsWeather() {
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
           
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
            return resp.data.features.map(lugar => ({
                id:lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],

            }))

            // retornar los lugares que se busquen
            return []

        } catch(error){
            return [];
        }
    }


    async climaLugar(lat, lon) {

        try {
            // instancia de axios
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWeather, lat, lon} 

            }) 
            // respuesta
            const resp = await instance.get();
            const {weather, main} = resp.data;

            return{
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }


}

module.exports = Busquedas;