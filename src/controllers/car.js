import { prisma } from '../helpers/prisma.js';

export const index = async (req, reply) => {
  try {
    const cars = await prisma.car.findMany();
    return reply.send(cars);
  } catch (error) {
    console.error(error);
    return reply.status(500).send(error);
  }
};

// TODO adicionar validação
export const create = async (req, reply) => {
  const file = req.file;
  const { name, year, brand_id } = req.body;
  try {
    const car = await prisma.car.create({
      data: {
        name: name,
        year: year,
        brand: { connect: { id: parseInt(brand_id) } },
        image_url: file.path,
      },
    });
    return reply.status(201).send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send(error);
  }
};

export const update = async (req, reply) => {
  const { id } = req.params;

  let data = {};

  if (req.body.name) {
    data.name = req.body.name;
  }

  if (req.body.year) {
    data.year = req.body.year;
  }

  if (req.body.brand_id) {
    data.brand = parseInt(req.body.brand_id);
  }

  if (req.file) {
    data.image_url = req.file.path;
  }

  try {
    const car = await prisma.car.update({
      where: { id: parseInt(id) },
      data: data,
    });
    return reply.status(200).send(car);
  } catch (error) {
    console.log(error);
    reply.status(500).send(error);
  }
};
