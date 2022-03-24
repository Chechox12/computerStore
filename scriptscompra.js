// Año actual en el footer 
const ano = document.getElementById("añoActual");
const anoActual = new Date();
ano.innerHTML = anoActual.getFullYear();

// compra, descuento y total a pagar de los computadores
function calculatePurchase() {
  let computersPurchased = parseInt(document.getElementById("computers").value);
  let price = 1000;
  let purchaseValue = computersPurchased*price;

  document.getElementById("r1").value = purchaseValue;

  if (computersPurchased < 5) {
    let discountValue = 0;
    let total = purchaseValue;

    document.getElementById("r2").value = discountValue;
    document.getElementById("r3").value = total;
    document.getElementById("message").innerHTML = "No discount for this purchase :(";

  } else if ((computersPurchased >= 5) && (computersPurchased < 10)) {
    let discountValue = 0.05;
    let total = purchaseValue-(purchaseValue*discountValue);

    document.getElementById("r2").value = discountValue*100;
    document.getElementById("r3").value = total;
    document.getElementById("message").innerHTML = "you get a 5% discount, congratulations!";

  } else {
    let discountValue = 0.1;
    let total = purchaseValue-(purchaseValue*discountValue);

    document.getElementById("r2").value = discountValue*100;
    document.getElementById("r3").value = total;
    document.getElementById("message").innerHTML = "you get a 10% discount, congratulations!";
  }
}

// Ocultar la primera sección

function hide(){
  document.getElementById("toHide").style.display = "none";
}

function show() {
  document.getElementById("toShow").style.display = "block";
}