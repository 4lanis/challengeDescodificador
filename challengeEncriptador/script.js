const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function removerImagem() {
    document.getElementById("m").style.backgroundImage ='none';
}

function btnEncriptar() {

    const textoEncriptado = encriptar(textArea.value);
    removerImagem()
    mensagem.value = textoEncriptado;
    textArea.value = "";
}
function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDescriptar() {

    const textoEncriptado = desencriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}
function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {

    const copiarTexto = navigator.clipboard.writeText(mensagem.value)

}


