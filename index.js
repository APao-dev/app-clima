require('dotenv').config()

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

// console.log(process.env.MAPBOX_KEY);


const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Mostrar mensaje 
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                // Buscar el lugar

                // Seleccionar el lugar

                // Datos del clima

                // Mostrar Resultados
                console.log('\nInformación de la Ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Latitud:',);
                console.log('Lng:',);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
            break;
    
        }
       

       if(opt !==0) await pausa();

    }while(opt !== 0)

    
}

main();