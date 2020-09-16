import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
  console.log('Listagem');

  response.json([
    'Diego',
    'Juca',
    'Jose'
  ]);
});

app.listen(3333);
