
let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let trabajoPractico = "100 minutos de hacer trabajos practicos";
let tareaCasa = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1")
    }
    console.groupCollapsed("dia " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajoPractico);
    console.log(tareaCasa);
    console.groupEnd();
    if (i == 6) {
        console.groupEnd();
        console.groupCollapsed("Semana 2")
    }
}

console.groupEnd()
console.groupEnd()









