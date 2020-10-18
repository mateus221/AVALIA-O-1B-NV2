const tel = document.querySelector('#telefone'); // Recebe o valor do campo telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "") //Habilita apenas numeros
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Insere o dd entre ()
        valor = valor.replace(/(\d{4})(\d)/g, "$1-$2"); //Insere os primeiros 4 numeros do telefone seguindos do -
        valor = valor.replace(/(\d{4})(\d)$/, "$1"); //Insere os ultimos 4 numeros do telefone
        tel.value = valor; // Insere o(s) valor(es) no campo 
    } 


const form = document.querySelector('form'); // Recebe o valor do formulario
const email = document.querySelector('#email'); // Recebe o valor do campo email
const btn = document.querySelector('#btn'); // Recebe o valor do botao
        
let x; // Inicia como variavel auxiliar
let emailDigitado = false; // Inicia a variavel em false
let emailCadastrado = []; // Inicia a variavel com vetor
       
btn.addEventListener('click', (e) => { // Aguarda o botao ser clicado
    for (x of emailCadastrado) { // Percorre o vetor armazenando e x
        if (email.value == x) { // Verifica se o valor do capo email é igual a x
            alert('Esse e-mail ja existe'); // Emite um aletro caso a condicão for verdadeira
            emailDigitado = true; // Passa a variavel para verdadeira
        }
    }

    if (emailDigitado == false) { // Verifica se a variavel é falsa
        emailCadastrado.push(email.value); // Adiciona o valor do campo email no fim do vetor
        form.reset(); // Limpa os campos do formulario
    }

    e.preventDefault();
    emailDigitado = false;
});