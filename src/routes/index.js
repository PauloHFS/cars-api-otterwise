import multer from 'fastify-multer';
import path from 'path';
import * as BrandController from '../controllers/brand.js';
import * as CarController from '../controllers/car.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + extension);
  },
});

const upload = multer({ storage });

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

const carsRoutes = {
  showAllCars: {
    method: 'GET',
    url: '/cars',
    handler: CarController.index,
  },
  createCars: {
    method: 'POST',
    url: '/cars',
    preHandler: upload.single('image'),
    handler: CarController.create,
  },
  updateCar: {
    method: 'PUT',
    url: '/cars/:id',
    preHandler: upload.single('image'),
    handler: CarController.update,
  },
  updateCarAtribute: {
    method: 'PATCH',
    url: '/cars/:id',
    preHandler: upload.single('image'),
    handler: CarController.update,
  },
  deleteCar: {
    method: 'DELETE',
    url: '/cars/:id',
    handler: CarController.remove,
  },
};

const routes = { ...brandRoutes, ...carsRoutes };

const renderRoutes = Object.values(routes);

export default (fastify, _, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
