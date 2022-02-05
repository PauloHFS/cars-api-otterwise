import { prisma } from '../helpers/prisma.js';

export const index = async (req, reply) => {
  try {
    const brands = await prisma.brand.findMany();
    return reply.send(brands);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};

export const create = async (req, reply) => {
  const { name } = req.body;

  if (!name) return reply.status(400).send('Falta o name!');

  try {
    const brand = await prisma.brand.create({
      data: {
        name,
      },
    });
    return reply.status(203).send(brand);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};

export const update = async (res, reply) => {
  const { id } = res.params;
  const { name } = res.body;

  if (!name) return reply.status(400).send('Falta o name!');

  try {
    const brand = await prisma.brand.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    return reply.status(200).send(brand);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};

export const remove = async (res, reply) => {
  const { id } = res.params;

  try {
    const brand = await prisma.brand.delete({ where: { id: parseInt(id) } });
    return reply.status(200).send(brand);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};
