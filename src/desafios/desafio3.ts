// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')
let botaoLimpar = document.getElementById('limpar-saldo')
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')

let somatorio = 0
limparSaldo()

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    somatorio += soma
		campoSaldo.innerHTML = somatorio.toString()
    limparCampos()
	}
}

function limparCampos() {
  soma.value = ''
}

function limparSaldo() {
  if (campoSaldo) {
    somatorio = 0
    campoSaldo.innerHTML = somatorio.toString()
  }
}

if (botaoAtualizar) 
  botaoAtualizar.addEventListener('click', () => { somarAoSaldo(Number(soma.value)) })

if (botaoLimpar)
  botaoLimpar.addEventListener('click', () => { limparSaldo() })

export {}
