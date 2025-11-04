const express = require('express')
const app = express();
const PORT = 3000;
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(PORT, () => {
    console.log('Server started on port 3000');
})

db.sequelize.sync()
.then((result) => {
        app.listen(3000, () => {
            console.log('Server Started');
     })
 })
.catch((err) => {
        console.log(err);
    })

app.post("/Film", async (req, res) => {
    const data = req.body;
    try {
        const Film = await db.Film.create(data);
        res.status(201).send({
            message: "Film berhasil ditambahkan!",
            Film: Film
        });
    } catch (err) {
        res.status(500).send
    }
});

app.get('/Film', async (req, res) => {
    try {
        const Film = await db.Film.findAll();
        res.send(Film);
    }
    catch (err) {
        res.send(err);
    }
});

app.put('/Film/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const Film = await db.Film.findByPk(id);
        if (!Film) {
            return res.status(404).send({ message: 'Film tidak ditemukan' });
        }

        await Film.update(data);
        res.send({ message: 'Film berhasil diupdate', Film });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/Film/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const Film = await db.Film.findByPk(id);
        if (!Film) {
            return res.status(404).send({ message: 'Film tidak ditemukan untuk dihapus' });
        }
        await Film.destroy();
        res.send({ message: 'Film berhasil dihapus' });
    } catch (err) {
        res.status(500).send
    }
});






