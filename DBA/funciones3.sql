DELIMITER $

CREATE PROCEDURE insertarCompra(
    IN id_avion_param VARCHAR(20),
    IN silla_param INT
)
BEGIN
    INSERT INTO compras (id_avion, silla) VALUES (id_avion_param, silla_param);
END $

DELIMITER ;



DELIMITER $

CREATE TRIGGER compras_insert_trigger
AFTER INSERT ON compras
FOR EACH ROW
BEGIN
    INSERT INTO vitacoracompras (id_avion, silla) VALUES (NEW.id_avion, NEW.silla);
END $

DELIMITER ;


DELIMITER $

CREATE TRIGGER compras_update_trigger
AFTER UPDATE ON compras
FOR EACH ROW
BEGIN
    INSERT INTO vitacoracompras (id_avion, silla) VALUES (NEW.id_avion, NEW.silla);
END $

DELIMITER ;



DELIMITER $

CREATE TRIGGER compras_delete_trigger
AFTER DELETE ON compras
FOR EACH ROW
BEGIN
    INSERT INTO vitacoracompras (id_avion, silla) VALUES (OLD.id_avion, OLD.silla);
END $

DELIMITER ;

