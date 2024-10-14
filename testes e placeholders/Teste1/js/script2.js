const manual = ['Aqui tem tudo que um Sumo Oficial Fronteiriço precisa saber sobre naves e suas respectivas classificações, antes de permitir a passagem de algo é necessário comparar as características da nave presente na fronteira com as características de sua classe aqui escrita, a entrada só é permitida caso não haja diferença, caso contrário, ative as defesas planetárias e ordene a destruição imediata da nave, o descumprimento de suas ordens resultará em afastamento do cargo, redução do estato social de sua família e a acusação de traição, tenha em mente que apesar de ser uma acusação, ninguém foi capaz de se provar inocente, vale também mencionar que quando aberto o precesso de acusação, é iniciado simultaneamente uma ordem de localizar e destruir sobre você, ou seja, qualquer cidadão imperial tem o direito de te caçar e o dever de te executar caso tenham a chance.<br> Que o Deus-Imperador abencoe sua jornada de trabalho.', "<b>Classe Imperatoris</b> <br> <b>Canhões</b> - Entre 100 até 200 <br> <b>Tamanho</b> - Entre 8km por 2km até 10km por 5km <br> <b>População</b> - Entre 100 até 250 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, aríete, armas anti-projétil e canhões magnéticos <br> <b>Pode transportar mercadorias?</b> - Não <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Não é permitido transporte de mercadorias <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Sim <br> <b>Pode ter armamento anti-planetário?</b> - Deve ter", "<b>Classe Galeão</b> <br> <b>Canhões</b> - Entre 80 até 100 <br> <b>Tamanho</b> - Entre 4km por 2km até 6km por 3km <br> <b>População</b> - Entre 60 até 90 mil pessoas <br> <b>Armamentos extras</b> - Pode carregar torpedos, armas anti-projétil e um aríete <br> <b>Pode transportar mercadorias?</b> - Sim <br> <b>É necessário ter licensa mercante para transportar mercadorias?</b> - Sim <br> <b>Pode ser da Frota Imperial?</b> - Sim <br> <b>É obrigatoriamente da Frota Imperial?</b> - Não <br> <b>Pode ter armamento anti-planetário?</b> - Somente com permissão imperial"]

const percorreManual = (manual, i = 0) => {
    const setaL = document.getElementById("setaL")
    const setaR = document.getElementById("setaR")

    document.getElementById("manualT").innerHTML = manual[i]

    if (i = 0) {
        setaL.onclick = percorreManual(manual, manual.length-1)
        setaR.onclick = percorreManual(manual, i+1)
    }
    else if (i = manual.length-1) {
        setaL.onclick = percorreManual(manual, i-1)
        setaR.onclick = percorreManual(manual, 0)
    }
    else {
        setaL.onclick = percorreManual(manual, i-1)
        setaR.onclick = percorreManual(manual, i+1)
    }
}