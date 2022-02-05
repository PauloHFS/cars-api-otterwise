import path from 'path';
import 'dotenv/config';
import fastify from 'fastify';
import multer from 'fastify-multer';
import helmet from 'fastify-helmet';
import fastifyStatic from 'fastify-static';
import routes from './routes/index.js';

const __dirname = path.resolve();

const PORT = process.env.PORT || 3333;

const app = fastify({
  logger: true,
});

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
});

app.register(multer.contentParser);

app.register(helmet);

app.register(routes);

app.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`
  🚀 Server ready at: ${address}
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`);
});
