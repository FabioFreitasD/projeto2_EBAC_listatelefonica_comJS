const form = document.getElementById('form-inscrição');
const nomeUsuarioCompleto = document.getElementById('nome-completo');
const emailUsuario = document.getElementById('email-1');
const confirmeEmail = document.getElementById('email-2');
const myPassword = document.getElementById('senha-usuario');

let formEvalido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    formEvalido = validaNome(nomeUsuarioCompleto.value);
    if(formEvalido) {
        const mensagemSucesso = document.getElementById('sucessMessage');
        mensagemSucesso.innerHTML = 'Inscrição realizada com sucesso!';
        mensagemSucesso.style.display = 'block';

        nomeUsuarioCompleto.value = '';
        emailUsuario.value = '';
        confirmeEmail.value = '';
        myPassword.value = ''; 
        resetEstiloErro();
    } else {
        const mensagemError = document.getElementById('errorName');
        mensagemError.innerHTML = 'O nome precisa ser completo!';
        aplicarEstiloErro();
    }
});

nomeUsuarioCompleto.addEventListener('input', function(e){
    const valorDoCampoNome = validaNome(e.target.value);
    const nomeEvalido = validaNome(valorDoCampoNome);
    
    if (!nomeEvalido) {
        aplicarEstiloErro();
    } else {
        resetEstiloErro();
    }
});

function aplicarEstiloErro() {
    nomeUsuarioCompleto.style.border = '1px solid red';
    document.getElementById('errorName').style.display = 'block'
}

function resetEstiloErro() {
    nomeUsuarioCompleto.style.border = '1px solid #ccc';
    document.getElementById('errorName').style.display = 'none';
}

// Campo para comparar e-mails

function comparaEmails(email1, email2) {
    return email1 !== email2;
}

const mensagemEmail = document.getElementById('error-Email');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailsDiferentes = comparaEmails(emailUsuario.value, confirmeEmail.value);

    if (emailsDiferentes) {
        mensagemEmail.innerHTML = 'Os e-mails digitados são diferentes';
        mensagemEmail.style.border = '1px, solid, red';
        mensagemEmail.style.display = 'block';
    } else {
        mensagemEmail.style.display = 'none';
    }
});


