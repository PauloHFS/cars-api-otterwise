import 'dotenv/config';
import fastify from 'fastify';
import helmet from 'fastify-helmet';

const app = fastify({
  logger: true,
});

app.register(helmet);

app.listen(process.env.PORT || 3333, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`
  🚀 Server ready at: ${address}
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`);
});
