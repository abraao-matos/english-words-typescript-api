# :open_book: Words Dictionary Typescript API

## :bookmark_tabs: Descrição
Essa API é um dicionário de palavras que fornece informações sobre as definições, exemplos de uso, sinônimos e traduções de palavras.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Como utilizar

### 1. Clone o repositório:
<pre>
  <code>
    git clone https://github.com/abraao-matos/words-dictionary-typescript-api.git
  </code>
</pre>

### 2. Instale as dependências:
<pre>
  <code>
    npm install
  </code>
</pre>

## Entidades

<pre>
 Word {
  word: string;
  definition: string;
  examples: string[];
  synonyms?: string[];
  translations: {
    [key: string]: string;
  };
}
</pre>

## Rotas

- GET /words - retorna as palavras salvos no banco
- GET /words/:word - retorna a palavra especificada salva no banco
- POST /words - cria uma palavra
- PATCH /words/:word - atualiza a palavra especificada
- DELETE /words/:words - deleta a palavra especificada

## Exemplo

![Exemplo](https://i.imgur.com/OGReQaL.png)
