import knex from "../database/connection";
import { Request, Response } from "express";

class PointsController {
  async create(request: Request, response: Response) {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } =
      request.body;

    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };
    const insertedIds = await knex("points").insert(point);
    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await knex("point_items").insert(pointItems);

    return response.json({
      id: point_id,
      ...point,
    });
  }

  async index(request: Request, response: Response) {
    const points = await knex("points").select("*");

    return response.json(points);
  }

  async delete(request: Request, response: Response) {
    const pointId = request.query.id

    const deletedPoints = await knex('points').where({'id': pointId}).del()

    const deletedItems = await knex('point_items').where({'point_id': pointId}).del()

    const result = `Um total de ${deletedPoints} pontos e ${deletedItems} itens foram removidos`; 
    return response.json({response: result})
  }
}

export default PointsController;
