const { application } = require('express');
const express = require('express');
const routes = require('./intro_routes/routes')
const app = express();
const port = 3000
app.use(express.json());

app.use('/api', routes)

app.listen(port, () => {
    console.log(`listening in http://localhost:${port}`);
});