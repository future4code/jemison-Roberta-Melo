## Exercicio 1
### a)
VARCHAR representa uma string, o numéro entre () é o número máximo 255 caracteres aceitos.

Primary Key é a chave primária de uma tabela.

NOT NULL representa que o campo não pode ser deixado em branco.

DATE representa o formato de uma data YYYY-MM-DD. 

### b)
SHOW DATABASES;
Aparece a tabela existente na base de dados.
SHOW TABLES;
Aparece a tabela criada com a informação da pessoa.

### c)
 DESCRIBE Actor;
 Aparece todas as informações do Actor.

## Exercicio 2

### a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

### b)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. 

Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'.

Esta sendo usado o mesmo id. A PRIMARY KEY  é única.

### c)

Error Code: 1136. Column count doesn't match value count at row 1.

Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
1 row(s) affected
### d)
Error Code: 1364. Field 'actor_name' doesn't have a default value

Código de erro: 1364. O campo 'actor_name' não tem um valor padrão

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Brad Pitt",
  400000,
  "1949-04-18", 
  "male"
);

### e)

Error Code: 1292. Incorrect date value: '1950' form column 'birth_date' art row 1.

Código de erro: 1292. Valor de data incorreto: coluna de formulário '1950' 'data de nascimento' linha de arte 1.

### f)
continuar