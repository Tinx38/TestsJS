
const materias = {
    fisica: [90, 6, 4, "fisica"],
    matematica: [79, 7, 3, "matematica"],
    logica: [89, 8, 4, "logica"],
    quimica: [94, 9, 3, "quimica"],
    calculo: [95, 8, 2, "calculo"],
    programacion: [100, 10, 4, "programacion"],
    biologia: [91, 8, 3, "biologia"],
    bbdd: [90, 7, 4, "bbdd"],
    algebra: [85, 7, 2, "algebra"]
}

const aprobacion = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let practicos = materias[materia][2];

        console.log(materias[materia][3])

        if (asistencias >= 90) {
            console.log("   %cAsistencias al dia", "color: green")
        } else {
            console.log("   %cDesaprobado por inasistencias", "color: red")
        }
        if (promedio >= 7) {
            console.log("%c Promedio aprobado", "color: green")
        } else {
            console.log("%c Promedio desaprobado", "color: red")
        }
        if (practicos >= 3) {
            console.log("%c Practicos entregados y aprobados", "color: green")
        } else {
            console.log("%c Practicos faltantes o desaprobados", "color: red")
        }
    }
}

aprobacion()


