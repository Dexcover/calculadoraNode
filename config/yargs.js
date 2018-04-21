const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('crear', 'imprime en consola el a tabla de multiplicar', opts)
    .command('listar', 'Lista la tabla de multiplicar con base y limite ', opts)
    .help()
    .argv;

module.exports = {
    argv
}