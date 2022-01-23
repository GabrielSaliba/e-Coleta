import express from "express";
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get('/points/:id', pointsController.show)
routes.get("/points", pointsController.index)
routes.post("/points", pointsController.create);
routes.delete('/points/:id', pointsController.delete)


export default routes;
