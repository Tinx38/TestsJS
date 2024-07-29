
const obtenerInformacion = (materia) => {
    const materias = {
        quimica: ["Holga", "pedro", "juan", "julian"],
        fisica: ["Suarez", "pedro", "juan", "lucas", "bautista", "julian"],
        programacion: ["Jirafales", "pedro", "juan", "lucas"],
        logica: ["Ramirez", "juan", "lucas", "bautista", "julian"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia)

    if (informacion !== false) {
        let profesor = informacion[0][0]
        let alumnos = informacion[0]
        alumnos.shift();
        document.write(`el profesor de ${informacion[1]} es: <b>${profesor}</b><br>
        y los alumnos que tiene son: <b>${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++
            clasesPresentes.push(" " + info);
        }
    }
    return `${alumno} esta en ${cantidadTotal} clases:<b> ${clasesPresentes}</b> <br><br>`;
}

mostrarInformacion("quimica")
mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")

document.write(cantidadDeClases("pedro"))
document.write(cantidadDeClases("juan"))
document.write(cantidadDeClases("bautista"))
document.write(cantidadDeClases("julian"))
document.write(cantidadDeClases("lucas"))











