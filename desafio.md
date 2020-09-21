# Cenário
Na Volanty, nós realizamos diversos procedimentos além da compra e venda do automóvel que precisam da presença física do mesmo. Entre eles, estão a inspeção prévia do veículo para divulgação no nosso site e visitas de possíveis compradores.

Para realizar tais procedimentos, obviamente, temos que pedir que o proprietário do veículo o traga para algum Centro de Atendimento Volanty (CAV), numa data pré-agendada.

## Inspeção

Para realizar uma inspeção, o proprietário do veículo precisa consultar a nossa agenda (via site ou pelo nosso telefone) e escolher um horário disponível em algum CAV.

## Visita

Para que a visita aconteça, o interessado num determinado veículo deve encontrar um horário disponível na nossa agenda (via site ou telefone), dado o CAV onde o proprietário se comprometeu de levar o veículo. Após a escolha do horário, notificamos o proprietário, que confirma a presença do veículo naquela data.

---

## Desafio

Dado o cenário acima, escreva uma api REST que:

- Retorne a lista de CAV's;
  - caminho: /cav
  - método: GET
- Retorne os horários disponíveis para um dado CAV por procedimento (Inspeção ou Visita);
  - caminho: /cav/{cavId}
  - método: GET
- Permita agendar uma inspeção;
  - caminho: /cav/{cavId}/inspection
  - método: POST
- Permita que o interessado marque uma visita para um dado veículo;
  - caminho: /cav/{cavId}/visit
  - método: POST

---

## Pré-requisitos

A api deve responder JSON;

Para métodos de busca, a api deve utilizar parâmetros via url (query ou path);

Para métodos transacionais, a api deve consumir os parâmetros via JSON;

Utilize os arquivos JSON abaixo como "banco de dados":

- CAV: <https://bitbucket.org/volantyApp/assessment/src/master/backend/data/cav.json>
- Carros: <https://bitbucket.org/volantyApp/assessment/src/master/backend/data/cars.json>
- Agenda: <https://bitbucket.org/volantyApp/assessment/src/master/backend/data/calendar.json>

## Método de entrega

- O código pode ser escrito em qualquer linguagem de programação adequada para desenvolvimento de api's Rest;
- O desafio deverá ser entregue de um repositório git público em uma das plataformas mais comuns (github, bitbucket ou gitlab);
- O desafio deve incluir um arquivo README explicando como se executa o mesmo. A execução do código não pode depender do uso de uma IDE específica.

## Bônus

Não é obrigatório, mas seu desafio será muito bem visto caso:

- Venha acompanhado de um Dockerfile contendo o seu entregável
- Seu código possua testes unitários.
