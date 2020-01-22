const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-9stkw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// liberando acesso externo para qualquer tipo de aplicação
app.use(cors());
// usando a função USE para dizer que será aplicado em todo o projeto
app.use(express.json());
app.use(routes);

app.listen(3333);