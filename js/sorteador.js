const submeterFormulário = () => {
 const rangeInicial = document. getElementById("rangeinicial").value;
 const rangeFinal = document. getElementById("rangefinal").value;
 const minhaaposta = document. getElementById("minhaaposta").value;

realizarsorteio(+rangeInicial, +rangeFinal, +minhaaposta);
}

const realizarsorteio = (rangeInicial, rangeFinal, minhaaposta) => {
 
    if (!rangeInicial) {
        alert("Informe o Range Inicial");
        return;
        }
    if (!rangeFinal) {
        alert("Informe o Range Final");
        return;
        }
        if (!minhaaposta) {
        alert("Informe a sua Aposta");
        return;
    }

    const numerosorteado = novoSorteio(rangeInicial, rangeFinal);


    if(numerosorteado === minhaaposta) {
        alert("Parabéns, você Acertou!")
        return
    }

    alert(`Erro! O número soreteado foi ${numerosorteado}`);

}

const novoSorteio = (rangeInicial, rangeFinal) => {
 return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1))+ rangeInicial);
}