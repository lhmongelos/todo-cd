# GRUPO ABERTO 

# App

To-Do é uma aplicação web para gerenciamento de tarefas diárias simples.
Com esta ferramenta é possível definir atividades e gerenciar o status das mesmas.


## Configurando ambiente

Para começar a usar o app, primeiro tenha o docker e docker compose instalado na máquina.
Em seguida va até a raiz do projeto e use o comando:

> docker-compose up -d

Para subir um container docker com o PostgresSQL configurado, olhe o arquivo para ver as portas de acesso e credenciais de usuário caso tenha problemas.
Em seguida lembresse de olhar o arquivo `.env` presente na raiz do projeto. Ele contem as constante que são usadas para iniciar a aplicação presente no arquivo `app.js`.

## Banco de dados
O banco de dados está rodando dentro do docker (PotgreSQL), ao iniciar a aplicação será criado automaticamente dentro do banco de dados a estrutura a partir das models colocadas  na pasta de models.

### O Arquivo '.Env'

Variáveis:

`SERVER_PORT` responsável por informar a aplicação a porta que usará

## Iniciando o app
Ao fazer o clone do repositório vá até a raiz do projeto e execute o comando:

> npm install

Para baixar as dependências do projeto, então com as variáveis de ambiente devidamente atribuídas, use o  comando:
> npm start

Para executar a aplicação com `nodemon`, a aplicação por padrão como definido no arquivo `.env` deve ser executada na porta 3333

## Integrantes do Grupo:
  1) Gabriel Colman Rodrigues
  2) Luiz Henrique Mongelos 
  3) Vinicius Cavalcante Moreira

## Histórias de Usuário

- [ ] Definir tarefas
- [ ] Agrupar tarefas em listas
- [ ] Modificar o status das tarefas
- [ ] Visualizar tarefas e listas
- [ ] Publicar listas
- [ ] Buscar por tarefas e listas

## Histórias Bônus

- [ ] Definir datas limite
- [ ] Acompanhar o andamento geral
- [ ] Compartilhar listas com outros usuários
- [ ] Adicionar etiquetas de marcação
