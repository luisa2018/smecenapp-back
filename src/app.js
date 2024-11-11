const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sincronizar la Base de Datos
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Database sync error', err));

// Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});