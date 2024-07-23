function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdInput = document.getElementById('qtd')

    //Verificar se a quantidade é um numero positivo

    if (isNaN(qtd) || qtd <= 0){
        alert('Por favor, insira uma quantidade válida.');
    }

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else{
        comprarInferior(qtd);
    }
    
}
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert ('Quantidade indisponivel para tipo pista')

    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso');
    }
}

function comprarSuperior(qtd){
    let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdCadeiraSuperior){
        alert ('Quantidade indisponivel para tipo superior')

    }else{
        qtdCadeiraSuperior = qtdCadeiraSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior;
        alert ('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior')
    .textContent);
    if (qtd > qtdCadeiraInferior){
        alert ('Quantidade indisponivel para tipo inferior')
        }else{
            qtdCadeiraInferior = qtdCadeiraInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior
            alert ('Compra realizada com sucesso');
        }    
}

