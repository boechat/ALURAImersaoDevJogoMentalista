//Criar um jogo que vai gerar um número aleatorio entre 1 em 1000 e dois jogadores deverão adivinhar qual é o numero, avisando quando estiver perto ou longe de acertar

//Armazenar numero secreto
var numeroSecretoFixo = 581
// Usando Math.Random() para gerar numero aleatorio
var numeroSecreto = parseInt(Math.random()* 1001);
var acertou = false
var tentativas = 5
let listaAcertos = [];

//Pedir valor: USANDO PROMPT
//prompt('Digite um número entre 0 e 1000')
while(acertou != true && tentativas != 0)
  {
    var chute = prompt('Digite um número entre 1 e 1000')
    
    if (chute == numeroSecreto)
    {
      listaAcertos.push(chute);
      alert('Acertou! E ainda tinha '+tentativas+' tentativas')
      acertou = true
    }
  else if (chute > numeroSecreto)
    {
      tentativas = tentativas - 1
      alert('Seu chute foi Maior! Tente algo ... menor! Você ainda tem mais '+tentativas+ ' tentativas!')
      listaAcertos.push(chute);
      
    }
  else if (chute < numeroSecreto)
    {
      tentativas = tentativas - 1
      alert('Seu chute foi Menor! Tenta algo... maior! Você ainda tem mais '+tentativas+ ' tentativas!')
      listaAcertos.push(chute);
    }
  }

if(acertou== false)
  {
    alert('Infelizmente você falhou! Você tentou colocar os números: '+listaAcertos+' Mas o Resultado era : '+numeroSecreto)
  }
else
  {
    alert('Aparentemente você é um grande campeão heim! Você colocou os números: '+listaAcertos+' E o Resultado era : '+numeroSecreto+' e não só Isso! Você ainda tinha '+tentativas+' tentativas!')
  }