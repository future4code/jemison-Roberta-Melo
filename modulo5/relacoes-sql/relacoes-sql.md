## Exercicio 1
``` 
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)
```
### a)
A chave estrangeira (Foreing Key) é uma referencia da Primary Key da outra tabela, fazendo a ligação pelo id.

### b)
```
    CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

```
    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
		"001",
        "Muito bom!",
         7,
		"004"
);
```

### c)
```
    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
		"001",
        "Muito bom!",
         7,
		"004"
),
(
		"002",
        "Muito ruim!",
         8,
		"005"
);
```

### d)
ALTER TABLE Movies DROP COLUMN Rating;

## Exercicio 2
```
   CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
### a)
As tabelas se vinculam uma com a outra, juntando suas informações.

### b)
```
INSERT INTO MovieCast (movie_id, actor_id)
 VALUES(
	6,
    "001"
),
 (
	5,
    "002"
),
 (
	4,
    "003"
),
(
	3,
    "004"
),
(
	2,
    "005"
),
(
	1,
    "006"
);
```
## Exercicio 3
```
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```
### a)
A Query junta o elemento da outra tabela através do mesmo id.

### b)
SELECT name, Movies.id, rate 
FROM Movies
INNER JOIN Rating 
ON Movies.id = Rating.movie_id;

// arrumar bug do MySQL workbench