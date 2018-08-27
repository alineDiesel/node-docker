# Node Docker

Um exemplo simples de _Olar world_ para entender como construir e rodar sua aplicação em containers. (=

## Requisitos

Ter [docker instalado](https://www.docker.com/get-started) e rodando, e [node v.8+](https://nodejs.org/en/download/)

## Tarefas

Antes de tudo, não esqueça de instalar as dependências da app:

`npm install`

### Testes

Frame para testes utilizada: _jest_ e você pode executar os testes através do comando:

`npm run test:unit`

### Start da aplicação

Para iniciar a aplicação sem docker, execute o comando:

`npm start`

### Start da aplicação com docker

Para iniciar a aplicação com docker, não esqueça que antes é necessário construir sua imagem, então, o primeiro comando a ser executado deve ser:

`npm run docker:build`

e depois para rodar o container e a aplicação:

`npm run docker:start`
