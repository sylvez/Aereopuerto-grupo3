
use aereopuerto;


INSERT INTO usuarios (nombre, npasaporte, pais, direccion, telefono, clave) 
VALUES ('Juan', 123456789, 'España', 'Calle Principal 123', 1234567890, 'clave123');

UPDATE usuarios 
SET telefono = 987654321 
WHERE nombre = 'Juan';

DELETE FROM usuarios 
WHERE nombre = 'Juan';


