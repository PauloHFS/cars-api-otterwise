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
};

const renderRoutes = Object.values(routes);

export default (fastify, _, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
