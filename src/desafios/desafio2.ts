// Como podemos melhorar o esse código usando TS? 

enum Profissao {
	Atriz,
	Padeiro
}

type PessoaGeral = {
	nome: string,
	idade: number,
	profissao: Profissao
}

let pessoa1: PessoaGeral = {
	nome: "maria",
	idade: 29,
	profissao: Profissao.Atriz
}
