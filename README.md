## Questão 01 
Resultado - 77 


## Questão 02 
Resultado - 
- a) Sequencia de números ímpares consecutivos = 9
- b) O dobro do último número = 128
- c) Sequências de n² = 49
- d) Sequência de n² onde n é par = 100
- e) Fibonacci = 13
- f) Alternância de somar 1 e somar 8 


## Questão 03 - 

### Instalando dependências : 
1. **URL .env**:
    ```bash
      DATABASE_URL="postgresql://user:password@localhost:5433/faturamento_db?schema=public"
    ```
3. **Instalando**: 
    ```bash
      npm install 
    ```
4. **Docker**: Certifique-se de que o Docker está instalado e em execução no seu sistema. Você pode baixar e instalar o Docker através deste link: [Docker Download](https://www.docker.com/get-started).
5. **Docker Compose**: Certifique-se de que o Docker Compose está instalado. Se o Docker já está instalado, o Docker Compose geralmente vem junto. Verifique a instalação com o seguinte comando:
    ```bash
    docker compose --version
    ```
6. **Iniciando o container**: Para iniciar o contianer com a imagem do PostgreSQL.
   ```bash
    docker compose up -d 
   ```
7. **Verificando container**: Para verificar container está rodando bem. 
   ```bash
    docker ps
   ```
8. **Prisma**: Iniciando o prisma
   ```bash
    npx prisma db pull
   ```

   ```bash
     npx prisma migrate dev --name init
   ```
   ou
   ```bash
     npx prisma migrate dev 
   ```

   ```bash
    npx prisma generate
   ```

## Questão 04 - 

### Pré-requisitos:
1. **Docker**: Certifique-se de que o Docker está instalado e em execução no seu sistema. Você pode baixar e instalar o Docker através deste link: [Docker Download](https://www.docker.com/get-started).
2. **Docker Compose**: Certifique-se de que o Docker Compose está instalado. Se o Docker já está instalado, o Docker Compose geralmente vem junto. Verifique a instalação com o seguinte comando:
    ```bash
    docker-compose --version
    ```
3. **Iniciando o container**: Para iniciar o contianer com a imagem do PostgreSQL.
   ```bash
    docker compose up -d 
   ```
4. **Verificando container**: Para verificar container está rodando bem. 
   ```bash
    docker ps 
   ```
5. **Query no DB**: Após o assionamento do container vamos rodar as query's em alguma Database Clients como Beekeper ou DBeaver.
  ##### Estrutura de Arquivos:
  Certifique-se de que sua estrutura de pastas está configurada da seguinte maneira:
  - Rode a primeira query init.sql
  - Após rode a sgunda query query.sql
  
   ```bash
    └── SQL
        └── init.sql
        └── query.sql
   ```


### Modelo de Banco de Dados

<img src="https://github.com/VINIA6/TargetSistemas/blob/master/Q4/img/data.png" alt="Diagrama">

### Estrutura das Tabelas

| **Clientes**       | **Telefones**       | **Tipos_Telefone**      | **Estados**          |
|--------------------|---------------------|-------------------------|----------------------|
| id_cliente (PK)     | id_telefone (PK)    | id_tipo_telefone (PK)    | id_estado (PK)       |
| nome_cliente        | número_telefone     | descrição_tipo           | nome_estado          |
| id_estado (FK)      | id_cliente (FK)     |                         | sigla_estado         |
|                    | id_tipo_telefone (FK)|                         |                      |

### Relacionamentos

- **Clientes** possui uma relação 1:N com **Telefones**.
- **Telefones** possui uma relação N:1 com **Tipos_Telefone**.
- **Clientes** possui uma relação N:1 com **Estados**.


## Questão 05 - 
<img src="https://github.com/VINIA6/TargetSistemas/blob/master/Q4/img/Sem%20t%C3%ADtulo-2024-07-18-1835.png" alt="Diagrama">
