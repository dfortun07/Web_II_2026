const datos = [
    {
        'pais': 'Bolivia',
        'precio': 200
    },
    {
        'pais': 'Brasil',
        'precio': 200
    },
    {
        'pais': 'Chile',
        'precio': 200
    },
    {
        'pais': 'Peru',
        'precio': 200
    },
    {
        'pais': 'Ecuador',
        'precio': 200
    }
];
const presupuesto = 250;

const buscarPasaje = (datos, presupuesto) => {
    let paisSeleccionado = '';

    for (let i = 0; i < datos.length && paisSeleccionado == ''; i++) {
        if (datos[i].precio <= presupuesto) {   
            paisSeleccionado = datos[i].pais;
        }
    }

    if (paisSeleccionado == '') {
        console.log("No hay pasajes disponibles");
    } else {
        console.log(`Pais seleccionado: ${paisSeleccionado}`);
    }
};

buscarPasaje(datos, presupuesto);