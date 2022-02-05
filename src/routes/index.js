import * as BrandController from '../controllers/brand.js';

const brandRoutes = {
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
    handler: BrandController.update,
  },
  deleteBrand: {
    method: 'DELETE',
    url: '/brands/:id',
    handler: BrandController.remove,
  },
};

const routes = { ...brandRoutes };

const renderRoutes = Object.values(routes);

export default (fastify, _, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
