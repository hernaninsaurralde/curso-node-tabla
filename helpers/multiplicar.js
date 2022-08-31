const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = "";
    const fs = require("fs");

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${'x'.green} ${i} = ${base * i} \n`;
    }

    if (listar) {
      console.log(`======================` .green);
      console.log(`   Tabla del ${colors.blue ( base )}`);
      console.log(`======================` .green);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado!`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
