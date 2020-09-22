import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

// padrao de nomes para funcoes nos controllers
// index (lista todos), show (lista 1), create, update, delete

routes.get('/items', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show); 

export default routes;
