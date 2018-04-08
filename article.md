Using Relay with a flex pattern
===============================

Preparation
-----------

### The schema

```graphql
type Query {
  stories: [ Story! ]!
  story( id: ID! ): Story
}

type Story {
  id: ID!
  title: String!
  content: String!
  comments: [ Comment ]
}

type Comment {
  id: ID!
  author: String!
  email: String!
  message: String!
}
```

### The server

#### Data source

```yaml
- id: story1
  title: Story 1
  content: |
    Hello world
    ===========

    This is just a small blog post about nothing. Yet it is something.
  comments: []
```

#### Express

```js
const SERVER_PORT = process.env.SERVER_PORT || 4000;

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
```

#### Resolvers

```js
const storyModel = require( './story' );
module.exports = {
  stories: () => storyModel.getAll(),
  story: ( { id } ) => storyModel.get( id ),
};
```

#### Stories

```js
let data = {};

// Load static content
( async () => {
  const storiesFile = path.join( __dirname, '../data/stories.yml' );
  const rawData = await fs.readFile( storiesFile, { encoding: 'utf-8' } );
  const stories = yaml.safeLoad( rawData );
  for ( const story of stories ) {
    data[ story.id ] = story;
  }
} )();

module.exports = {
  getAll: () => {
    return data.values();
  },
  get: ( id ) => {
    return data[ id ];
  },
};
```
