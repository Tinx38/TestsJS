
let studentNumber = prompt("how many students are?");
let totalStudentNumber = [];

for (i = 0; i < studentNumber; i++) {
    totalStudentNumber[i] = [prompt("student name " + (i + 1)), 0]
}

const takeAssistance = (name, p) => {
    let pressence = prompt(name);
    if (pressence == "p" || pressence == "P") {
        totalStudentNumber[p][1]++
    } 
}

for (i = 0; i < 30; i++) {
    for (student in totalStudentNumber) {
        takeAssistance(totalStudentNumber[student][0], student)
    }
}

for (student in totalStudentNumber) {
    let result = `${totalStudentNumber[student][0]}:<br>
    numerAssists: <b>${totalStudentNumber[student][1]}</b><br>
    numberAbsences: <b>${30 - parseInt(totalStudentNumber[student][1])}</b>
    `;
    if (30 - totalStudentNumber[student][1] > 18) {
        result += "<b style='color:red'> failed due to number of absences </b> <br>";
    } else {
        result += "<br>";
    } document.write(result);
}

