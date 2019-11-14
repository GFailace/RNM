# RNM Web App

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versião 8.3.17 utilizando a última versão do Angular.

Neste projeto foi utilizada a API de [Rick e Morty](https://rickandmortyapi.com), como backend dos dados apresentados no app sendo retornados utilizando requisições HTTP. O método principal de cada componente está no serviço de API(api.service.ts) enquanto métodos específicos de cada componente estão distribuídos entre os mesmos. Devido ao diferente tipo de retorno da API precisei definir nas diretivas **`ngIf`** e **`ngFor`** para tratar o retorno e exibir o resultado na View, além de criar uma forma de automatizar as requisições dinamicamente à API. O maior aprendizado foi de como utilizar retorno de URLs para realizar novas requisições e como utilizar diferentes elemtos no mesmo retorno(Arrays, Objetos) de maneiras específicas no app. Caso tivesse mais tempo, poderia implementar um sistema de busca de Locations ou Characters listados para facilitar a visualização do mesmo e melhorar a função de retorno à pagina anterior.

## Rodando o App
Para rodar o app, basta clonar o [repositório](https://github.com/GFailace/RNM) para o diretório desejado e executar o comando **`npm install`** ou **`npm i`** para instalar as dependências do projeto, e após executar o comando `ng serve` ou `npm start` para iniciar o servidor de desenvolvimento no endereço **`http://localhost:4200/`**. A aplicação pode ser acessada também em [https://gfailace.github.io/RNM/](https://gfailace.github.io/RNM/).

## Testes

Rodar o comando `ng test` para executar testes unitários via [Karma](https://karma-runner.github.io) e rodar o comando `ng e2e` para executar testes end-to-end via [Protractor](http://www.protractortest.org/).
