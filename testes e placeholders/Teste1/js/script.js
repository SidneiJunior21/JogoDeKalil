// funções q vai guiar a introdução:    
function teste() {
    document.getElementById("teste1").innerHTML = 'cuz'
}

function skip1() {
    const bot1 = document.getElementById("bot1");
    document.getElementById("texto").innerHTML = 'cuzinho';
    bot1.addEventListener("click", skip2())
    
}


function skip2() {
    const textos = document.getElementById("texto");
    textos.addEventListener("click", () => textos.textContent="newtext");
    console.log("bananinha")
//    document.getElementById("myspan");
}