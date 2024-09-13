-- Criar o schema chamado software
CREATE SCHEMA software;

-- Criar a tabela Estados dentro do schema software
CREATE TABLE software.Estados (
    id_estado SERIAL PRIMARY KEY,
    nome_estado VARCHAR(100),
    sigla_estado CHAR(2)
);

-- Criar a tabela Tipos_Telefone dentro do schema software
CREATE TABLE software.Tipos_Telefone (
    id_tipo_telefone SERIAL PRIMARY KEY,
    descricao_tipo VARCHAR(50)
);

-- Criar a tabela Clientes dentro do schema software
CREATE TABLE software.Clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome_cliente VARCHAR(255),
    id_estado INT REFERENCES software.Estados(id_estado)
);

-- Criar a tabela Telefones dentro do schema software
CREATE TABLE software.Telefones (
    id_telefone SERIAL PRIMARY KEY,
    numero_telefone VARCHAR(20),
    id_cliente INT REFERENCES software.Clientes(id_cliente),
    id_tipo_telefone INT REFERENCES software.Tipos_Telefone(id_tipo_telefone)
);

-- Inserção de dados no schema software
INSERT INTO software.Estados (nome_estado, sigla_estado) VALUES ('São Paulo', 'SP'), ('Rio de Janeiro', 'RJ');

INSERT INTO software.Tipos_Telefone (descricao_tipo) VALUES ('Comercial'), ('Residencial'), ('Celular');

INSERT INTO software.Clientes (nome_cliente, id_estado) VALUES ('Empresa XYZ', 1), ('Empresa ABC', 2);

INSERT INTO software.Telefones (numero_telefone, id_cliente, id_tipo_telefone) 
VALUES ('11999999999', 1, 3), ('2133333333', 2, 1);
