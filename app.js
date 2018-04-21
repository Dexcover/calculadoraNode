//const fs = require('express'); de otras personas
//const fs = require('./fs'); archivos hemos creado y deberia estar en algún lado de nuestro pro

const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
console.log(argv.base);
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo has been created ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}
// let base = '5';


// let parametro = argv[2];
// let base = parametro.split('=')[1];



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo has been created ${archivo}`))
//     .catch(err => console.log(err));