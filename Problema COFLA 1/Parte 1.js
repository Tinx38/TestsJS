alert("y te sobran" + dineroCofla - 0.6);

dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert('Cofla, podes comprarte el helado de agua');
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, podes comprarte el helado de crema");
    alert("y te sobran" + (dineroCofla - 1));

}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, podes comprarte el helado marca heladix");
    alert("y te sobran" + (dineroCofla - 1.6));

}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, podes comprarte el helado marca heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));

}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, podes comprarte el helado marca helardo");
    alert("y te sobran" + (dineroCofla - 1.8));

}

else if (dineroCofla >= 2.9) {
    alert("Cofla, podes comprar el helado de confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroCofla - 2.9));

}
else {
    alert("Perdon Cofla, no te alcanza nada con ese dinero");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert('Roberto, podes comprarte el helado de agua');
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, podes comprarte el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, podes comprarte el helado marca heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, podes comprarte el helado marca heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, podes comprarte el helado marca helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, podes comprar el helado de confites o el pote de 1/4kg");
}
else {
    alert("Perdon Roberto, no te alcanza nada con ese dinero");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert('Pedro, podes comprarte el helado de agua');
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, podes comprarte el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, podes comprarte el helado marca heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, podes comprarte el helado marca heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, podes comprarte el helado marca helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, podes comprar el helado de confites o el pote de 1/4kg");
}
else {
    alert("Perdon Pedro, no te alcanza nada con ese dinero");
}

