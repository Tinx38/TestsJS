
let materias = {
    quimica: ["Holga", "pedro", "juan", "julian"],
    fisica: ["Suarez", "pedro", "juan", "lucas", "bautista", "julian"],
    programacion: ["Jirafales", "pedro", "juan", "lucas"],
    logica: ["Ramirez", "juan", "lucas", "bautista", "julian"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, los cupos de <b>${materia}</b> ya estan agotados <br>`)
    }
    else {
        personas.push(alumno);

        if (materia == "quimica") {
            materias = {
                quimica: personas,
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
            }
        }
        else if (materia == "fisica") {
            materias = {
                quimica: materias["quimica"],
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
            }
        }
        else if (materia == "programacion") {
            materias = {
                quimica: materias["quimica"],
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
            }
        }
        else if (materia == "logica") {
            materias = {
                quimica: materias["quimica"],
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
            }
        }
        document.write(`Felicidades ${alumno}! te has inscripto en ${materia} exitosamente!<br>`)
    }
}

document.write(materias["quimica"] + "<br>")


inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")
inscribir("lucas", "quimica")

document.write("<br>" + materias["quimica"])

