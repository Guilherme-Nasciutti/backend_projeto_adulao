const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const routeAuth = require('./src/routes/authRouter');
const routeRoles = require('./src/routes/rolesRouter');
const routeUsers = require('./src/routes/usersRouter');
const routePerson = require('./src/routes/personsRouter');
const routeActivities = require('./src/routes/activitiesRouter');

const app = express();

const PORT = 3302;

app.use(express.json());

// Rotas públicas
app.use('/api/auth', routeAuth);

// Rotas protegidas
app.use('/api/usuarios', routeUsers);
app.use('/api/perfis-de-acesso', routeRoles);
app.use('/api/pessoas', routePerson);
app.use('/api/atividades', routeActivities);

app.listen(PORT, () => {
    console.log(`Executando app na porta ${PORT}`);
});
