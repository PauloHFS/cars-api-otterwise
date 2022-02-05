import { prisma } from '../helpers/prisma.js';

export const index = async (req, reply) => {
  try {
    const brands = prisma.brand.findMany();
    return reply.send(brands);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};

export const create = async (req, reply) => {
  const { name } = req.body;

  if (!name) return reply.status(400).send('Name is need!');

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
