
class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalarApp() {
        if (this.instalada === false) {
            this.instalada = true;
            alert("app instalada de 10")
        }

    }
    desInstalarApp() {
        if (this.instalada === true) {
            this.instalada = false;
            alert("app desinstalada de 10")
        }
    }
    abrirApp() {
        if (this.iniciada === false && this.instalada === true) {
            this.iniciada = true;
            alert("app iniciada")
        }
    }
    cerrarApp() {
        if (this.iniciada === true && this.instalada === true) {
            this.iniciada = false;
            alert("app cerrada")
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b> <br>
        Puntuacion: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        `
    }

}

app1 = new App("5.000 Descargas", "2 ⭐⭐", "545 MB")
app2 = new App("20.000 Descargas", "3 ⭐⭐⭐", "304 MB")
app3 = new App("100.000 Descargas", "4 ⭐⭐⭐⭐", "210 MB")
app4 = new App("70.000 Descargas", "3 ⭐⭐⭐", "278 MB")
app5 = new App("1.000 Descargas", "2 ⭐⭐", "500 MB")
app6 = new App("50.000 Descargas", "3 ⭐⭐⭐", "309 MB")
app7 = new App("1.000.000 Descargas", "5 ⭐⭐⭐⭐⭐", "130 MB")

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `)

