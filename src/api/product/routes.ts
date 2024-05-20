import { FastifyInstance } from "fastify";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./controller";

const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", getProducts);
  fastify.get("/products/:id", getProductById);
  fastify.post("/products", createProduct);
  fastify.put("/products/:id", updateProduct);
  fastify.delete("/products/:id", deleteProduct);
};

export default productRoutes;
