
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
        Memoria ram: <b>${this.memoriaRam}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        `
    }
}

class celularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdcE) {
        super(color, peso, tamaño, rdc, ram)
        this.resolucionDeCamaraExtra = rdcE;
    }
    grabarVideoCamaraLenta() {
        alert("estas grabando de camra lenta")
    }
    reconocimientoFacial() {
        alert("iniciando reconocimiento facial")
    }
    infoCelularAltaGama () {
        return this.infoCelular() + `Resolucion de camara extra:<b> ${this.resolucionDeCamaraExtra} </b>` + "<br>"
    }

}


celular1 = new celularAltaGama("Blanco Escarcha", "125 gr", "5.9 pulgadas", "2K", "3 GB", "full HD")
celular2 = new celularAltaGama("Celeste Cielo", "100 gr", "6.1 pulgadas", "4K", "5 GB", "2K")


// celular1 = new Celular("negro", "160gr", "5.5 pulgadas", "full HD", "2 GB")
// celular2 = new Celular("rojo", "180gr", "4.8 pulgadas", "full HD", "1 GB")
// celular3 = new Celular("amarillo", "145gr", "5.5 pulgadas", "HD", "2 GB")

document.write (`
    ${celular1.infoCelularAltaGama()} <br>
    ${celular2.infoCelularAltaGama()} <br>
    `)

