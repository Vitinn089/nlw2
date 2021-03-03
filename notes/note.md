# Node

Node roda o JS no terminal.

O npm é o gerenciador de pacotes do node.

`npm ínit -y` inicia um novo projeto na pasta.
`npm install express` express é uma bibliotecal
`npm install nodemon -D` instala o nodemon, programa que atualiza o servidor quando for feita alteração. o parâmetro -D significa que será instalado somente para os dev.

`npm install nunjucks` É uma template engine. Cria HTML

## .json

JavaScript Object Notation

Propriedades sempre entre aspas duplas e valores também



require('express')().listen(5500) o require chama a função express que retorna um objeto. o listen abre a porta para o servidor.


`node src/server.js` executa o script no node.

o `.get(/)` retorna algo quando se pede alguma coisa

__dirname

no package.jason adicionei um script de nome 'dev' `"dev": "nodemon src/server.js"`

ao executar `npm run dev` no terminal ele executa esse script