import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { dataSources } from './data';
import expressPlayGround from 'graphql-playground-middleware-express';

async function init() {
  // Init express app
  const app = express();
  const PORT = process.env.PORT || 3000;
  //settings
  app.set('port', PORT);
  app.use('*', cors());
  app.use(compression());

  // Init Apollo server (if you like, could use graphiQL)
  const server = new ApolloServer({
    schema,
    introspection: true,
    //add dataSources
    dataSources: () => ({
      seasons: new dataSources.SeasonsData(),
      races: new dataSources.RacesData(),
      drivers: new dataSources.DriversData(),
    }),
  });

  server.applyMiddleware({ app });

  //define endpoint with expressPlayground
  app.use(
    '/',
    expressPlayGround({
      endpoint: '/graphql',
    })
  );

  const httpServer = createServer(app);

  //starting server
  httpServer.listen(app.get('port'), () => {
    console.log(`server on port http://localhost:${app.get('port')}/`);
    console.log(`server apollo on http://localhost:${app.get('port')}/graphql`);
  });
}

init();
