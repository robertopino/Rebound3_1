alert("Pasajero(a), se le recuerda que para abordar el avión debe tener a mano su pasaporte y su tarjeta de embarque. Manténgase atento a los avisos mediante esta plataforma");

function mostrarHora(){
    let time = new Date();
    // let hours = time.getHours();
    // let minutes = time.getMinutes();
    // let hoursMinutes = (hours + ":" + minutes);
    let timeFormat = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    document.querySelector('#insertTime').innerHTML = timeFormat;
    
    console.log(time);
}

function mostrarFecha(){
    let time = new Date();
    let day = time.toLocaleDateString().replace(/\//g, '-');
    document.querySelector('#insertDate').innerHTML = day;

    console.log(day);
}
mostrarHora();
mostrarFecha();

function mostrarVuelo(){
   let numeroVuelo = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
   document.querySelector('#flightNumber').innerHTML = numeroVuelo;

console.log(numeroVuelo);
}

mostrarVuelo();

function mostrarTerminal(){
    let terminal = Math.floor(Math.random() * (99 - 10 + 1) + 10)
    document.querySelector('#terminalNumber').innerHTML = terminal;
}

mostrarTerminal();
