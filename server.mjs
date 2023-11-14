console.log("hello world");

import express from 'express';
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
  res.send('Hello World profile')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})