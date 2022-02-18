const express = require('express');
const path = require('path');
const userRoute = require('./routes/userRoutes');
console.log(__dirname);
const views = (document) => path.join(__dirname,'views',document);

const app = express();

const PORT = process.env.PORT || 4111;
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(userRoute);

app.get('/', (request, response) => {
    response.sendFile(views('usersView.html'));
});

app.listen(PORT, console.log("Servidor usando el puerto: " + PORT));

