DELIMITER $
CREATE PROCEDURE insertarUsuarios(IN nombreP VARCHAR(25), IN npasaporteP INT, IN paisP VARCHAR(25), IN direccionP VARCHAR(25), IN telefono INT, IN claveP VARCHAR(25))
BEGIN
    INSERT INTO usuarios (nombre, npasaporte, pais, direccion, telefono, clave) VALUES (nombreP, npasaporteP, paisP, direccionP, telefono, claveP);
END $
DELIMITER ;


DELIMITER $
CREATE TRIGGER registroDatos AFTER INSERT ON usuarios 
FOR EACH ROW
BEGIN
    INSERT INTO vitacoraDatos (id, fecha, nombre, accion) 
    VALUES (NEW.id, CURRENT_TIMESTAMP(), NEW.nombre, 'Insertado');
END $
DELIMITER ;


DELIMITER $
CREATE TRIGGER EliminarDatos AFTER DELETE ON usuarios
FOR EACH ROW
BEGIN
    INSERT INTO vitacoraDatos (id, fecha, nombre, accion) 
    VALUES (OLD.id, CURRENT_TIMESTAMP(), OLD.nombre, 'Eliminado');
END $
DELIMITER ;


DELIMITER $
CREATE TRIGGER ActualizarDatos AFTER UPDATE ON usuarios
FOR EACH ROW
BEGIN
    INSERT INTO vitacoraDatos (id, fecha, nombre, accion) 
    VALUES (NEW.id, CURRENT_TIMESTAMP(), NEW.nombre, 'Actualizado');
END $
DELIMITER ;






