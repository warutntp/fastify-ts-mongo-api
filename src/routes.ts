import { FastifyInstance } from "fastify";
import productRoutes from "./api/product/routes";
import brandRoutes from "./api/brand/routes";

const registerRoutes = async (fastify: FastifyInstance) => {
  fastify.register(productRoutes);
  fastify.register(brandRoutes);
};

export default registerRoutes;
