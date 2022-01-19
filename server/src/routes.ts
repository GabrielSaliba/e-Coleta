import express, { application } from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const requestHost = request.get('host')
  const requestProtocol = request.protocol
  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `${requestProtocol}://${requestHost}/uploads/${item.image}`
    };
  })

  return response.json(serializedItems);
});

export default routes;
