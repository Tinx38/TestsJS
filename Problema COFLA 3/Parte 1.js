
class Celular {
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`video grabado en una resolucion de: ${this.resolucionDeCamara}`)
    }
    infoCelular() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>        
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        `
    }
}

celular1 = new Celular("negro", "100gr", "5.5 pulgadas", "full HD", "2 GB")
celular2 = new Celular("rojo", "110gr", "4.8 pulgadas", "full HD", "1 GB")
celular3 = new Celular("amarillo", "50gr", "6 pulgadas", "4K", "4 GB")

document.write(`
    <h1>Celular 1</h1>
    ${celular1.infoCelular()}
    <h1>Celular 2</h1>
    ${celular2.infoCelular()}
    <h1>Celular 3</h1>
    ${celular3.infoCelular()}
`)

