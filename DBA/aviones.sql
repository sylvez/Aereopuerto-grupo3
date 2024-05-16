
CREATE TABLE aviones (
    id_aviones INT AUTO_INCREMENT PRIMARY KEY,
    avion VARCHAR(20),
    modelo VARCHAR(20),
    sillas_dp INT,
    escala VARCHAR(20),
    destino VARCHAR(20),
    hora_despegue VARCHAR(20),
    hora_aterrizaje VARCHAR(20),
    aeropuerto VARCHAR(20)
);


CREATE TABLE Vitacoraaviones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha TIMESTAMP,
    avion VARCHAR(20),
    accion VARCHAR(20)
);


