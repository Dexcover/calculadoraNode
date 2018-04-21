const fs = require('fs');

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es número la base: ${base}`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i*base}\n`;
        }

        resolve(data);

    });
}

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es número la base: ${base}`);
            return;
        }
        let data = '';
        for (let i = 1; i <= 12; i++) {
            data += `${i} * ${base} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}