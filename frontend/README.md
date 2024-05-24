# React + Vite

## Guias para o frontend

### Executar localmente

Utilize o terminal (bash) pra fazer os passos seguintes:

1. Clone o repositório pra sua máquina:

`git clone https://github.com/iW90/PJI110_projeto-integrador.git ProjetoIntegrador`

2. Entre na pasta do repositório clonado:

`cd ProjetoIntegrador`

3. Mude de branch:

`git checkout feature/ingrid_v1`

4. Crie uma branch nova pra você a partir da ingrid_v1 (pode mexer diretamente, mas criando uma nova você pode ir salvando suas próprias alterações e posteriormente subir pro repositório):

`git checkout -B feature/<nome-da-branch>`

4. Entre na pasta de frontend:

`cd frontend`

5. Instale os pacotes do node:

`npm install`

6. Rode o projeto na sua máquina:

`npm run dev`


### Para fazer deploy

1. Instale o pacote gh-pages:

`npm install gh-pages --save-dev`

2. Rode o comando de build:

`npm run build`

3. Rode o comando de deploy:

`npm run deploy`
