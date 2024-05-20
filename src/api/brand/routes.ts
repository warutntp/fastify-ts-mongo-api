import { FastifyInstance } from "fastify";
import {
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} from "./controller";

const brandRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/brands", getBrands);
  fastify.get("/brands/:id", getBrandById);
  fastify.post("/brands", createBrand);
  fastify.put("/brands/:id", updateBrand);
  fastify.delete("/brands/:id", deleteBrand);
};

export default brandRoutes;
