require('dotenv-safe').config();
const express = require('express');
const app = express();
app.use(express.json()); /// Body parser

console.log('PORT', process.env.PORT);

// ${process.env.NODE_ENV}

app.use('/', (req, res) => {
  res.send('HELLO');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
