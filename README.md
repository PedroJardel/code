<h1> Plann.er </h1>
<p>
  <img src="https://img.shields.io/static/v1?label=Node.js&message=v. 21.6.2&color=5FA04E&style=flat-sqare&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=npm&message=v. 10.8.1&color=CB3837&style=flat-sqare&logo=npm&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=v. 5.5.3&color=3178C6&style=flat-sqare&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=JavaScript&message=ECMAScript 2024&color=F7DF1E&style=flat-sqare&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=NestJs&message=v. 10.3.10&color=E0234E&style=flat-sqare&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=Prisma&message=v. 5.16.1&color=2D3748&style=flat-sqare&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=PostgreSQL&message=v. 20&color=4169E1&style=flat-sqare&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=Docker&message=latest&color=2496ED&style=flat-sqare&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/static/v1?label=Environment&message=.env&color=ECD53F&style=flat-sqare&logo=dotenv&logoColor=white"/>
</p>

<h4 align="center"> 
  Status do Projeto: Em Desenvolvimento... 🚧
</h4>

## Descrição do Projeto

O Next Level Week é o maior evento de programação na prática da Rocketseat.

Este projeto é da trilha de Node.Js onde consiste na criação do back-end (servidor) da aplicação.

Utilizando as tecnologias mais recentes do mercado e com forte comunidade, iremos desenvolver um projeto para cadastro de viagens com adição de participantes e confirmação por e-mail (Tecnologias utilizadas na seção mais abaixo).

Tabela de conteúdos
=================
<p align="center">
 <a href="#descricao-do-projeto">Descrição do Projeto</a> •
 <a href="#como-usar">Como usar</a> • 
 <a href="#features">Features</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a>
</p>

## Como usar
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/PedroJardel/nwl-journey.git>

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

## Features
#### Rotas método post
- [x] Cadastro de viagem => ('/trips')

Exemplo
```bash
{
	"destination": "Florianópolis",
	"starts_at": "2024-07-10 18:00:00",
	"ends_at": "2024-07-11 18:00:00",
	"owner_name": "Pedro Lima",
	"owner_email": "pedrolima@gmail.com",
	"emails_to_invite": [
		"fulano@gmail.com",
		"siclano@gmail.com",
		"neltrano@gmail.com"
	]
}
```

#### Rotas método get
###### Pacientes
- [x] Confirmar participação na viagem => ('/trips/:tripId/confirm')

Exemplo response
```bash
{
	"tripId": "224a424b-5da6-41be-a63e-1bde3e4ea08a"
}
```

## Tecnologias
- [Node.js](https://nodejs.org/pt)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Fastify](https://fastify.dev/)
- [Day.js](https://day.js.org/)
- [Zod](https://zod.dev/)
- [Nodemailer](https://nodemailer.com/)

## Autor
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/89553932?v=4" width="100px;" alt="foto de Perfil do Autor"/>
 <br />
 <sub><b>Pedro Lima</b></sub>


Feito por Pedro Lima - Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Pedro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pedro-jardel-zago-lima-49361a134/)](https://www.linkedin.com/in/pedro-jardel-zago-lima-49361a134/) 
[![Gmail Badge](https://img.shields.io/badge/-pedrozagolima@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pedrozagolima@gmail.com)](mailto:pedrozagolima@gmail.com)
