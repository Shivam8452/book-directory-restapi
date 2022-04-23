const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api/books', require('./routes/books'));

app.listen(port, () => {
  console.log(`Server is running at post ${port}`);
});