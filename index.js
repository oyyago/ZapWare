const bt= document.getElementById ('chama');
const nome = document.getElementById('nome');
let StringNome;
nome.addEventListener('change', (e) => {
  StringNome = e.target.value;
})

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function chamar() {
  const telefone = document.querySelector('#telefone').value;
  let pegar_nome = StringNome.split(" ")
  let nomep =pegar_nome[0] 
  let novo_nome = capitalize(nomep)

  let frases = [
    {frase:`Boa tarde ${novo_nome}, Tudo bem !!`},
    {frase:`Ola ${novo_nome}, Tudo bem !!`},
    {frase:`Ola ${novo_nome} !!`},
    {frase:`OI ${novo_nome}`},
    {frase:`Ola ${novo_nome} Boa tarde?`},
    {frase:`Ola Boa tarde, ${novo_nome}. `},
    {frase:`Ola. `},
    {frase:`Oi. `},
    {frase:`Ola Boa tarde. `},
    {frase:`Oie . `},
    {frase:`Boa tarde. `},





  ]

  const random = Math.floor(Math.random() * frases.length);
  
  let wpp = `https:api.whatsapp.com/send?phone=55${telefone}&text=${frases[random].frase}`


  window.location.href = wpp
  window.location.target = "_blank";

}







