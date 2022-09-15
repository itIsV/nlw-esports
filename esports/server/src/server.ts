import express from 'express';

const app = express()

app.get('/games', (req, res) => {
  return res.json([])
});

app.get('/games/:id/ads', (req, res) => {
  return res.json([
    {
      "id": 0,
      "name": "beriseu",
    },
    {
      "id": 1,
      "name": "damasdco",
    },
    {
      "id": 2,
      "name": "Amadeus cho",
    },
  ])
});

app.post('/ads/:id/discord', (req, res) => {
  return res.status(201).json('Acessou ads em, UHUUU!!\n hahahaHAHAHAH')
});

app.get('/ads', (req, res) => {
  return res.status(200).json('Acessou ads discord id em, UHUUU!!\n hahahaHAHAHAH')
});

app.listen(3333);
