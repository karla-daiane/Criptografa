//Buscar texto
function buscarTexto() {
    return document.querySelector("#texto").value;
}

//Buscar seleção de código
function buscarCodigo() {
    return document.querySelector('input[name="codigo"]:checked').value;
}

function obterDeslocamento() {
    return document.querySelector("#deslocamento").value;
}

function atualizarValor(valor) {
    document.getElementById("valorRange").textContent = valor;
}

//Criptografar texto
function criptografar() {
    let codigo = buscarCodigo();
    let deslocamento = Number(obterDeslocamento());
    let texto = buscarTexto();
    texto = texto.toLowerCase();
    let textoFinal = "";

    if (codigo == "cesar") {
        for (let i = 0; i < texto.length; i++) {
            let caractere = texto[i];
            if (ehLetra(caractere)) {
                let posicao = texto.charCodeAt(i);
                posicao += deslocamento;
                if (posicao > 122) {
                    posicao = posicao - 26;
                }
                textoFinal += String.fromCharCode(posicao);
            } else {
                textoFinal += caractere;
            }
        }
    } else {
        textoFinal = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    exibirTextoNaTela(textoFinal);
    exibirBotaoCopiar();
}


//Descriptografar texto
function descriptografar() {
    let codigo = buscarCodigo();
    let deslocamento = Number(obterDeslocamento());
    let texto = buscarTexto().toLowerCase();
    let textoFinal = "";
    if (codigo == "cesar") {
        for (let i = 0; i < texto.length; i++) {
            let caractere = texto[i];
            if (ehLetra(caractere)) {
                let posicao = texto.charCodeAt(i);
                posicao -= deslocamento;
                if (posicao < 97) {
                    posicao = posicao + 26;
                }
                textoFinal += String.fromCharCode(posicao);
            } else {
                textoFinal += caractere;
            }
        }
    } else {
        textoFinal = texto
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        }
    exibirTextoNaTela(textoFinal);
    exibirBotaoCopiar();
}

//Mostrar texto
function exibirTextoNaTela(textoFinal) {
    let campo = document.querySelector(".container__resultado__texto");
    campo.innerHTML = textoFinal;
}

//Exibir botão copiar
function exibirBotaoCopiar() {
    let botaoCopiar = document.querySelector(".container__resultado__btn");
    botaoCopiar.classList.remove("ocultar");
}

//Copiar texto
function copiar() {
    let texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto);
}

//Verifica o Caractere
function ehLetra(caractere) {
    return /^[a-zA-Z]$/.test(caractere);
}