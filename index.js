const express = require('express');
const userRouter = require('./user');
const port = 3000;
const app = express();

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});