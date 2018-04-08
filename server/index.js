const SERVER_PORT = process.env.SERVER_PORT || 4000;

const fs = require( 'fs-extra' );
const path = require( 'path' );
const express = require( 'express' );
const graphqlHTTP = require( 'express-graphql' );
const { buildSchema } = require( 'graphql' );
const resolvers = require( './resolvers' );

process.on( 'unhandledRejection', ( reason, p ) => {
  console.error( 'Unhandled Rejection at: Promise', p, 'reason:', reason );
} );

( async () => {
  const schemaFile = path.join( __dirname, '../schema.graphql' );
  const schemaDefinitions = await fs.readFile( schemaFile, { encoding: 'utf-8' } );
  const schema = buildSchema( schemaDefinitions );
  const app = express();

  app.use( '/graphql', graphqlHTTP( {
    schema,
    rootValue: resolvers,
    graphiql: true,
  } ) );

  app.listen( SERVER_PORT, () =>
    console.log( `Listening on localhost:${ SERVER_PORT }` )
  );
} )();
