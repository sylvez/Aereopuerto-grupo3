use Aereopuerto;

CREATE Table usuarios(
    id int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25),
    npasaporte int,
    pais VARCHAR(25),
    direccion VARCHAR(25),
    telefono int,
    clave VARCHAR(25) );

    CREATE TABLE vitacoraDatos(
    id INT,
    fecha DATE,
    nombre VARCHAR(20),
    accion VARCHAR(20)
);




