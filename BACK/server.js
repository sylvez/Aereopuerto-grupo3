const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors({
    origin: '*',
    methods: 'HEAD,GET,PUT,DELETE,POST,PATCH',
}));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const configdba = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aereopuerto',
};

const poolmysql = mysql.createPool(configdba);


server.get("/usuario", (req, res) => {
    res.send("¡Bienvenido a la API del aeropuerto!");
});

server.post("/usuario", (req, rep) => {
    const { nombre, npasaporte, pais, direccion, telefono, clave } = req.body;
    const sql = "INSERT INTO usuarios (nombre, npasaporte, pais, direccion, telefono, clave) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [nombre, npasaporte, pais, direccion, telefono, clave];
    
    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al insertar datos:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(201).json({ message: "Datos insertados correctamente" });
    });
});

server.delete("/usuario", (req, rep) => {
    const id = req.body.id;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    
    poolmysql.query(sql, id, (err, result) => {
        if (err) {
            console.error("Error al eliminar datos:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(200).json({ message: "Datos eliminados correctamente" });
    });
});

server.put("/usuario", (req, rep) => {
    const { id, nombre, npasaporte, pais, direccion, telefono, clave } = req.body;
    const sql = "UPDATE usuarios SET nombre = ?, npasaporte = ?, pais = ?, direccion = ?, telefono = ?, clave = ? WHERE id = ?";
    const values = [nombre, npasaporte, pais, direccion, telefono, clave, id];
    
    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al actualizar datos:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(200).json({ message: "Datos actualizados correctamente" });
    });
});

server.listen(8000, () => {
    console.log('Servidor en línea en el puerto 8000');
});
