import  express from 'express';

const app = express()

app.get('/ads', (req, res) => {
  return res.send('Acessou ads em, UHUUU!!\n hahahaHAHAHAH')
});

app.listen(3333);
