const fs = require('fs');

const crearArchivo = async (base=5, listar=false, hasta=10) => {

    try {
        let mensaje = '';
        for (let i = 1; i <= hasta; i++) {
            mensaje += `${base}x${i}=${base * i} \n`;
        }

        if(listar === true){
            console.log(mensaje);
        }

        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, mensaje,);

        return `tabla-${base}.txt`
    } catch (err) {
        throw err;
    }


};

module.exports = {
    crearArchivo
}
