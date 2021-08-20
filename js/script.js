

/*  Case Sensitive = reconhece letars maiscula e minnusculas
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementByName()
    por Classe:getElementByClassName()
    por Seletor: querySelector()
    Atenação no codigo abaixo usa # se ficar sem a # não funciona o códigfo atenção aos detalhes
*/
let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/*campo nome ficar com um campo de escrita maior*/
nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Check nome inválido'
        txtNome.style.color = 'red'        /*Cor dada a linha do codiog nome inválido na cor vermelho */
    } else {
        txtNome.innerHTML = 'Check nome válido'
        txtNome.style.color = 'green'      /*Cor dada a linha do codiog nome válido na cor verde */
        nomeOk = true
    }


    /*Validação email - Obrigação de ter no corpo do email @ e . */
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Check e-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Check e-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'           /* Outra formade colocar cor é por após style.backgroundColor='red' */
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha todos os campos do formulário corretamente antes de enviar...')
    }
}

function mapaZoom () {
    mapa.style.width = '800px'       /*largura */
    mapa.style.height ='600px'      /*altura */
}

function mapaNormal () {
    mapa.style.width = '400px'       /*largura mesmas medidas usadas aba contato linha 54 */
    mapa.style.height ='250px'      /*altura mesmas medidas usadas aba contato linha 54 */
}

