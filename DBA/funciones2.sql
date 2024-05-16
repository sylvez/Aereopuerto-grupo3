

DELIMITER $

CREATE PROCEDURE insertarAviones(
    IN avionP VARCHAR(20),
    IN modeloP VARCHAR(20),
    IN sillas_dpP INT,
    IN escalaP VARCHAR(20),
    IN destinoP VARCHAR(20),
    IN hora_despegueP VARCHAR(20),
    IN hora_aterrizajeP VARCHAR(20),
    IN aeropuertoP VARCHAR(20)
)
BEGIN
    INSERT INTO aviones (avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto)
    VALUES (avionP, modeloP, sillas_dpP, escalaP, destinoP, hora_despegueP, hora_aterrizajeP, aeropuertoP);
END $

DELIMITER ;



DELIMITER $

CREATE TRIGGER registroAviones AFTER INSERT ON aviones
FOR EACH ROW
BEGIN
    INSERT INTO Vitacoraaviones (fecha, avion, accion) 
    VALUES (CURRENT_TIMESTAMP(), NEW.avion, 'Insertado');
END $

DELIMITER ;


DELIMITER $

CREATE TRIGGER EliminarAviones AFTER DELETE ON aviones
FOR EACH ROW
BEGIN
    INSERT INTO Vitacoraaviones (fecha, avion, accion) 
    VALUES (CURRENT_TIMESTAMP(), OLD.avion, 'Eliminado');
END $

DELIMITER ;


DELIMITER $

CREATE TRIGGER ActualizarAviones AFTER UPDATE ON aviones
FOR EACH ROW
BEGIN
    INSERT INTO Vitacoraaviones (fecha, avion, accion) 
    VALUES (CURRENT_TIMESTAMP(), NEW.avion, 'Actualizado');
END $

DELIMITER ;
