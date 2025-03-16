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

## 👨‍💻 Sobre Mim

#### 📌 [LinkedIn](linkedin.com/in/pablo-manoel/)&nbsp;&nbsp; |&nbsp;&nbsp; ✍ [Medium](medium.com/@pablo.manoel)
