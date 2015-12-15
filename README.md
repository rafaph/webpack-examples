## Exemplos usando Webpack

#### O que é Webpack?
Webpack é um `module bundler`. Um `module bundler` é uma ferramenta para modularização de uma aplicação, que nesse caso é javascript. Permite o uso do padrão [CommonJS](http://wiki.commonjs.org/wiki/CommonJS). Além disso, o Webpack permite usar [loaders](http://webpack.github.io/docs/using-loaders.html) para diversas tarefas. Como dar `require` em css (neste caso, o conteúdo do arquivo css, será incluso dentro da tag `head` do seu HTML) e também compilar código na versão ES2015 (ou ES6) em ES5 do javascript com o `babel-loader`. \o/ \o/.

#### Objetivo
O objetivo deste repositório é mostrar exemplos usando webpack com `jQuery` e `bootstrap` e também sem usá-los.

#### Estrutura de cada exemplo
```
├── build
│   └── app.js
├── gulpfile.js
├── index.html
├── src
│   ├── index.js
│   ├── modules
│   │   └── dialog.js
│   └── pages
│       └── index.js
└── webpack.config.js
```

#### Exemplo
Em cada exemplo existe um módulo responsável por mostrar diálogos comuns, e em alguns deles usando o plugin `bootbox`, juntamente com o `jQuery` e `Bootstrap`.

#### Como rodar
* Clone este repositório
* Navegue até o diretório clonado utilizando o comando `cd`.
* Instale as dependências:
```sh
npm install
```
* Navegue até exemplo desejado utilizando o comando `cd`.
* Cada exemplo tem o seu próprio `gulpfile.js` e pode ser rodado independentemente.
```sh
# A flag prod pode ser usada para minificar o bundle gerado.
gulp [--prod]
# serão mostradas no terminal as opções com as tasks do exemplo.
# build: constrói o bundle (app.js).
# watch: observa os arquivos dentro do diretorio `src`, se houver mudança, o bundle é refeito automaticamente.
# clean: remove o bundle (app.js) do diretório `build`.
```
* Uma vez que o bundle tiver gerado, basta abrir no navegador o arquivo `index.html` e veja o exemplo rodando.

#### Licença
MIT (http://www.opensource.org/licenses/mit-license.php)
