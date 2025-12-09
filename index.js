const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/somma', (req, res) => {

    console.log(req.body);
    const a = req.body.a;
    const b = req.body.b;
    res.json(
        {
            result: a + b
        }
    );
});

app.listen(port, () => {
    console.log(`attivo su http://localhost:${port}`);
});