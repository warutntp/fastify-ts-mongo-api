import { FastifyRequest, FastifyReply } from "fastify";
import { Brand, IBrand } from "../../models/brand";

export const getBrands = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const brands = await Brand.find();
    reply.send(brands);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const getBrandById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const brand = await Brand.findById(id);
    if (brand) {
      reply.send(brand);
    } else {
      reply.status(404).send({ message: "Brand not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const createBrand = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const newBrand = new Brand(request.body as IBrand);
    await newBrand.save();
    reply.status(201).send(newBrand);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const updateBrand = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      request.body as Partial<IBrand>,
      { new: true }
    );
    if (updatedBrand) {
      reply.send(updatedBrand);
    } else {
      reply.status(404).send({ message: "Brand not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};

export const deleteBrand = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (deletedBrand) {
      reply.send({ message: "Brand deleted" });
    } else {
      reply.status(404).send({ message: "Brand not found" });
    }
  } catch (err) {
    reply.status(500).send(err);
  }
};
