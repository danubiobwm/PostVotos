import express from 'express';
import PostController from './controllers/PostController';
import VotosController from './controllers/VotosController';

const routes = express.Router();

/* List Posts */
routes.get('/posts', PostController.index);

/* Create Post */
routes.post('/post', PostController.store);

/* Route Votos */
routes.post('/votos/:id', VotosController.store);

export default routes;
