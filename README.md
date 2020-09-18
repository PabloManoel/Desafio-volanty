# cav_api

## execução do projeto

- Executar ```npm install```
- executar npm run start;

## Endpoints

- Retorne os horários disponíveis para um dado CAV por procedimento (Inspeção ou Visita)
    - GET /cav

- Retorna os horários disponíveis para um dado CAV por procedimento (Inspeção ou Visita)
    - GET /cav/{cavId}

- Permite agendar uma inspeção
    - POST /cav/{cavId}/inspection

- Permite que o interessado marque uma visita para um dado veículo;
    - POST /cav/{cavId}/visit

## Débitos técnicos

- Tratamento de exceções
- Validação se o carro existe na base
- Criação de dockerFile
- Criação de testes unitários
- Transformar JSON em chamadas ao banco
- passar API para Lambda
