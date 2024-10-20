//funções para executar transição fade
const fadeout = () => {
    document.getElementById("FadeOut").style.opacity = '1';
    document.getElementById("FadeOut").style.zIndex = '10';
}
const fadein = () => {
    document.getElementById("FadeOut").style.opacity = '0';
    document.getElementById("FadeOut").style.zIndex = '-1';
}
//função que desabilita uma quantidade n de botões durante 2 segundos, para evitar spam de botões
const Dbot = (...bot) => {
    bot.disabled = true;
    setTimeout(() => {bot.disabled = false}, 2000)
}
//função para esperar 2 segundos para executar outra funçao
const espera = (func) => {
    setTimeout(func, 2000)
}
//função para esperar 5 segundos para executar outra funçao, usada na troca de dias
const espera5 = (func) => {
    setTimeout(func, 5000)
}
// tarefas do dia 1
const tarefasD1 = [
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 7 NAVES NA FRONTEIRA, TODOS IDENTIFICADAS COMO CRUZADORES, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO ENTRE 3,5 E 2 KM. LEITURAS SUGEREM CERCA DE 50 MIL PESSOAS NA NAVE. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRA EM NENHUMA NAVE. NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE-', 
        resposta: 2
    },
    {
        texto: '-VOCÊ VÊ NO RADAR UMA FROTA DE 18 NAVES NA FRONTEIRA, SENDO 15 IDENTIFICADAS COMO FRAGATAS E 3 GALEÕES, NENHUM TENDO ASSINATURA IMPERIAL. LEITURAS APONTAM QUE NAS FRAGATAS HÁ UMA VARIAÇÃO DE 65 ATÉ 68 CANHÕES, JÁ NOS GALEÕES 100 EM CADA. EM RELAÇÃO AO TAMANHO, AS FRAGATAS TEM TODAS 2 POR 1 KM, JÁ OS GALEÕES SÃO 2 COM 4 POR 2 KM, E O OUTRO COM 6 POR 2 KM. LEITURAS SUGEREM 200 MIL PESSOAS JUNTANDO OS GALEÕES E 750 MIL NO RESTO. NÃO HÁ INDÍCIOS DE ARMAMENTOS EXTRAS EM NENHUMA NAVE. MERCADORIA FOI IDENTIFICADA NOS 3 GALEÕES,SEUS RESPECTIVOS CAPITÃES POSSUEM LICENÇA MERCANTE-', 
        resposta: 1
    }
]