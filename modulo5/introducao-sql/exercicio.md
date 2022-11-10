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
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

## Exercício 3
### a)
SELECT * FROM Actor WHERE gender = "female";

### b)

SELECT salary FROM Actor WHERE name = "Tony Ramos";

### c)

SELECT * FROM Actor WHERE gender = "invalid";

A tabela retorna com os valores NULL

### d)

SELECT id, name, salary FROM Actor WHERE salary <= 500;

### e)

SELECT id, nome FROM Actor WHERE id = "002";

Error Code: 1054. Unknown column 'nome' in 'field list'.

Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'.

## Exercício 4
### a)
SELECT * FROM Actor WHERE (name LIKE "a%" OR name LIKE "j%") AND salary > 300000;

Para verificar nomes que começam com a Letra A ou J, usa-se a sintaxe WHERE name LIKE "A%" OR name LIKE "J%". E o salário maior que  R$300.000.

### b)
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
### c)
SELECT * FROM Actor WHERE name LIKE "%g%";

### d)
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

## Exercicio 5
### a)

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

CREATE TABLE Movies, com os campos: id, title, summary, release_date e rating.
### b)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

### c)
INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
    );

  ### d)
  INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );

### e)
INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
    );
## Exercicio 6
### a)
SELECT id, title, rating FROM Movie WHERE id = "004";

### b)
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";

### c)
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

## Exercicio 7
### a)
SELECT * FROM Movie
WHERE title LIKE "%vida%";
### b)
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

### c)
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

### d)
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;