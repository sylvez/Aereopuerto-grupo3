const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'front')));


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
    database: 'aereo',
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






server.get("/aviones", (req, res) => {
    const sql = "SELECT * FROM aviones";
    
    poolmysql.query(sql, (err, result) => {
        if (err) {
            console.error("Error al obtener datos de aviones:", err);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        res.status(200).json(result);
    });
});

server.post("/aviones", (req, rep) => {
    const { avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto } = req.body;
    const sql = "INSERT INTO aviones (avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto];
    
    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al insertar datos de aviones:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(201).json({ message: "Datos de avión insertados correctamente" });
    });
});

server.delete("/aviones", (req, rep) => {
    const id = req.body.id;
    const sql = "DELETE FROM aviones WHERE id_aviones = ?";
    
    poolmysql.query(sql, id, (err, result) => {
        if (err) {
            console.error("Error al eliminar datos de aviones:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(200).json({ message: "Datos de avión eliminados correctamente" });
    });
});

server.put("/aviones", (req, rep) => {
    const { id_aviones, avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto } = req.body;
    const sql = "UPDATE aviones SET avion = ?, modelo = ?, sillas_dp = ?, escala = ?, destino = ?, hora_despegue = ?, hora_aterrizaje = ?, aeropuerto = ? WHERE id_aviones = ?";
    const values = [avion, modelo, sillas_dp, escala, destino, hora_despegue, hora_aterrizaje, aeropuerto, id_aviones];
    
    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al actualizar datos de aviones:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(200).json({ message: "Datos de avión actualizados correctamente" });
    });
});


server.use(express.static(path.join(__dirname, 'front')));


server.get("/compras", (req, res) => {
    const sql = "SELECT * FROM compras";

    poolmysql.query(sql, (err, result) => {
        if (err) {
            console.error("Error al obtener datos de compras:", err);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        res.sendFile(path.join(__dirname,'front', 'compras.html'));
    });
});


function generateRandomTicket() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const ticketLength = 8;
    let ticket = '';
    for (let i = 0; i < ticketLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticket += characters[randomIndex];
    }
    return ticket;
}

server.post("/compras", (req, rep) => {
    const { id_avion, silla } = req.body;

    const boleto = generateRandomTicket();

    const sql = "INSERT INTO compras (id_avion, silla, boleto) VALUES (?, ?, ?)";
    const values = [id_avion, silla, boleto];

    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al insertar datos de compras:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(201).json({ message: "Datos de compra insertados correctamente", boleto: boleto });
    });
});

server.put("/compras", (req, rep) => {
    const id = req.params.id;
    const { id_avion, silla } = req.body;

    const sql = "UPDATE compras SET id_avion = ?, silla = ? WHERE id = ?";
    const values = [id_avion, silla, id];

    poolmysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error al actualizar datos de compras:", err);
            return rep.status(500).json({ error: "Error interno del servidor" });
        }
        rep.status(200).json({ message: "Datos de compra actualizados correctamente" });
    });
});





server.listen(8000, () => {
    console.log('Servidor en línea en el puerto 8000');
});
