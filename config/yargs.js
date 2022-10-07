const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    describe: 'Es el número base para multiplicar del 1 al 10',
    demandOption: true
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    describe: 'Se necesita un valor de true o false para listar la tabla',
    default: false
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Es el número hasta donde va a multiplicar la base',
    demandOption: true
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un número, no letras' 
    }
    return true;
})
.argv;

module.exports = argv;