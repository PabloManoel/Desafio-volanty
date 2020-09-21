<p align="center">
<img src="https://lh3.googleusercontent.com/proxy/SSUz3Kjz9sAk4ULEUkq8LixGwSbosmze5MafmMjxb3Y4FQEH6U2FJ5973cnQenWlcy5y2v9ua_J-z78YukAtD3XAxLbfiylOG9gi4k68lKBLo1Lba48PjQJkHb_NYZU9D6BpM30" height="150" width="400" alt="Unform" />
</p>

# CAV API - Centro de atendimento Volanty

### Desafio técnico proposto durante o processo seletivo para vaga de desenvolvedor _back end_ na Volanty. Veja mais em **[Proposta](https://github.com/PabloManoel/Desafio-volanty/blob/master/desafio.md)**.

<br/>

## 🔗 Tabela de conteúdo

- [Instalação](#Instalação)

- [Pré-Requisitos](#Pré-requisitos)
- [Execução](#Execução)
  - [Desenvolvimento](#Desenvolvimento)

  - [Produção (DockerFile)](#Produção(DockerFile))
- [Testes](#testes)
- [Endpoints](#Endpoints)
- [Tecnologias](#tecnologias)
- [Autor](#Autor)

---

## Instalação

```bash
# Clone este repositório
$ git clone <https://github.com/PabloManoel/Desafio-volanty>

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-volanty

# Instale as dependências
$ npm install
```

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).

---

## Execução

### desenvolvimento

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-volanty

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <HTTP://localhost:3000/>
```

### Produção(DockerFile)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-volanty

# Construa sua imagem docker
$ docker build -t desafio/volanty-api .

# Rode seu container com a imagem criada
$ docker run --name volantyApi -p 8080:3000 -d desafio/volanty-api

# O servidor inciará na porta:8080 - acesse <HTTP://localhost:8080/>

# Para parar/reiniciar/excluir container:
$ docker <stop|start|kill> volantyApi
```

---

## Testes

```bash
# Clone este repositório
$ git clone <https://github.com/PabloManoel/Desafio-volanty>

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-volanty

# Instale as dependências
$ npm install

# Execute a rotina de testes do projeto
$ npm run test

# Será exibido no terminal o resultado da rodada de testes
```

---

## Endpoints

★ healthCheck

- HTTP Method: **GET**
- Path: /

★ Retorne uma lista de CAVs

- HTTP Method: **GET**
- Path: /cav

★ Retorna os horários disponíveis para um dado CAV por procedimento (Inspeção ou Visita)

- HTTP Method: **GET**
- Path: /cav/:cavId?procedure=<visit|inspection>

★ Permite agendar uma inspeção

- HTTP Method: **POST**
- path: /cav/:cavId/inspection
- _Body_ de exemplo:

```JSON
{
  "car": 5,
  "date": "2019-07-18T14:00:00"
}
```

★ Permite que o interessado marque uma visita para um dado veículo;

- HTTP Method: **POST**
- Path: /cav/:cavId/visit
- _Body_ de exemplo:

```JSON
{
  "car": 1,
  "date": "2019-07-18T12:00:00"
}
```

---

## Tecnologias

👉 [Npm](https://www.npmjs.com/)

👉 [Node](https://nodejs.org/en/)

👉 [Express](https://expressjs.com/)

👉 [Mocha](https://mochajs.org/)

👉 [Chai](https://www.chaijs.com/)

👉 [Docker](https://www.docker.com/)

👉 [Git](https://git-scm.com/)

---

## Autor

<a href="https://github.com/PabloManoel">
 <img style="border-radius: 50% 50% 0 0; padding-top:10px" src="https://avatars1.githubusercontent.com/u/25345710?s=460&u=1a40ec32900c78618cf47314c0bf555b6bfba641&v=4" width="100px;" alt=""/>
</a>
<br />

### Feito por Pablo Manoel 🤘 Entre em contato!

[<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="40" width="40" alt="Medium" />](https://github.com/PabloManoel)&nbsp;&nbsp;&nbsp;
[<img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" height="40" width="40" alt="Linkedin" />](https://www.linkedin.com/in/pablo-manoel/)&nbsp;&nbsp;
[<img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" height="40" width="40" alt="Medium" />](https://medium.com/@pablo.manoel)

---
---
