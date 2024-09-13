SELECT c.id_cliente, c.nome_cliente, t.numero_telefone
FROM software.Clientes c
JOIN software.Telefones t ON c.id_cliente = t.id_cliente
JOIN software.Estados e ON c.id_estado = e.id_estado
WHERE e.sigla_estado = 'SP';
