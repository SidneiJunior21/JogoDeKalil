const cdia4 = () => {
    espera(() => {
        fadein();
    });
    espera(() => {
        document.getElementById('Tdia').innerHTML = '4'; d4C1()
    });
}
//monologo do sistema
const d4C1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot3.disabled = false;

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-BEM VINDO DE VOLTA OFICIAL, SUA FREQUÊNCIA FOI ATUALIZADA COM SUCESSO, HOJE É PÁSCOA, DIA DE CELEBRAR A IMORTALIDADE DE NOSSO PROPRIETÁRIO, O DEUS-IMPERADOR. SIRVA BEM, VIVA BEM. ATIVIDADE FRONTEIRIÇA ALTA, AGUARDANDO SEU COMANDO-'

    bot3.onclick = d4t1
}