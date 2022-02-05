import { prisma } from '../src/helpers/prisma.js';

const brands = [
  {
    name: 'Toyota',
  },
  {
    name: 'Renault',
  },
];

const seed = () => {
  brands.forEach(async brand => {
    await prisma.brand.create({ data: brand });
  });
};

seed();
