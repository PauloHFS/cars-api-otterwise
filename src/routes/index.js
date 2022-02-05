import * as BrandController from '../controllers/brand.js';

const routes = {
  showAllBrands: {
    method: 'GET',
    url: '/brands',
    handler: BrandController.index,
  },
  createBrand: {
    method: 'POST',
    url: '/brands',
    handler: BrandController.create,
  },
  updateNameBrand: {
    method: 'PUT',
    url: '/brands/:id',
    handler: BrandController.updateName,
  },
};

const renderRoutes = Object.values(routes);

export default (fastify, _, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
