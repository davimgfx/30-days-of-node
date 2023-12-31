# 30 days of node

## Dia 1

### O que é Node

Um interpretador de JavaScript fora do ambiente do navegador web. Isso significa que os desenvolvedores podem usar JavaScript não apenas para criar interações em sites, mas também para construir aplicativos de servidor e outras aplicações que rodam diretamente no computador. O node.js roda no lado do servidor ( back end )

Além disso, Node.js também é conhecido por seu ecossistema de pacotes e módulos, o **Node Package Manager (NPM)** , que permite aos desenvolvedores acessar e compartilhar bibliotecas de código prontas, acelerando o processo de desenvolvimento.

### Como rodar o código

1. Entre na pasta do arquivo
2. Digite o comando
```
node nome-do-arquivo.js
```

## Dia 2

### Como ler arquivos no node
Existem dois modos de ler:
  - Assíncrono
  - Síncrono

#### Leitura assíncrona

- A leitura assíncrona é realizada usando funções que geralmente têm um callback como argumento, como fs.readFile.
- A leitura assíncrona é a abordagem recomendada para a maioria das operações de leitura de arquivos em Node.js, especialmente em aplicativos que precisam ser escaláveis e responsivos
- Quando você inicia uma operação de leitura assíncrona, o programa não espera pela operação de leitura ser concluída e continua a executar outras tarefas em paralelo.
- *A maioria das funções que aceitam callbacks sejam usadas em operações assíncronas é assíncrona ( pelo menos até agora)*

#### Leitura síncrona
- A leitura síncrona é realizada usando funções como fs.readFileSync.
- Espera as outras tarefas a serem executadas, e enquanto não for concluida, trava o sistema.

### E isso se repete para escrita, acrescentar, renomear, deletar ...

## Dia 3

### NPM ( node package manager)

### O que é NPM?

O NPM, ou Node Package Manager, é um gerenciador de pacotes para a linguagem de programação JavaScript. Ele permite que os desenvolvedores instalem, gerenciem e compartilhem pacotes de código reutilizável (bibliotecas, frameworks, módulos) com facilidade.

O npm instala pacotes de forma global (com a opção -g) ou local (no diretório do projeto) e os torna disponíveis para uso em scripts e código do projeto.

Exemplos:

```npm init react-app my-app```

```npm i nodemon -D``` (instala como dependência)



Na parte package.json, possui esse parte do código
```
 "scripts": {
    "start": "node day3/index",
    "dev": "nodemon day3/index"
  },
```

Ou seja se exercutar **npm start** executa o node, e se executar **npm run dev** executa a biblioteca nodemon, dentro da pasta day3

Instalando
```npm install next@latest react@latest react-dom@latest```

Instalando versons expecificas de um pacote
```npm install express@4.15.1``

Update
```npm update```

Removendo
```npm rm nodemon -D``` (remove como dependência)
```>npm uninstall --save gannit``` (remove do packjson)

## Dia 4

### Emitir e ouvir eventos

### Errors, promesas e try/catch

## Dia 5

### Iniciando um servidor
Digite o comando
```
npm init -y
```
