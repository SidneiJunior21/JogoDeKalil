// funções q vai guiar a introdução:    

function skip1() {
    const bot1 = document.getElementById("bot1");
    document.getElementById("texto").innerHTML = 'cuzinho';
    bot1.addEventListener("click", skip2)    
}

function skip2() {
    document.getElementById("texto").innerHTML = 'newtext';

//    document.getElementById("myspan");
}

