CREATE TABLE compras (
    id_avion VARCHAR(20),
    silla INT
);


CREATE TABLE vitacoracompras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_avion VARCHAR(20),
    silla INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
