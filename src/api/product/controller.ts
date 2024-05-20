import { FastifyRequest, FastifyReply } from "fastify";
import { Product, IProduct } from "../../models/product";

export const getProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const products = await Product.find();
    reply.send(products);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const getProductById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const product = await Product.findById(id);
    if (product) {
      reply.send(product);
    } else {
      reply.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const createProduct = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const newProduct = new Product(request.body as IProduct);
    await newProduct.save();
    reply.status(201).send(newProduct);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const updateProduct = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      request.body as Partial<IProduct>,
      { new: true }
    );
    if (updatedProduct) {
      reply.send(updatedProduct);
    } else {
      reply.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const deleteProduct = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      reply.send({ message: "Product deleted" });
    } else {
      reply.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};
