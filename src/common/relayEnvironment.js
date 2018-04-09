import 'regenerator-runtime/runtime';
import { installRelayDevTools } from 'relay-devtools';

import {
  Network,
  Environment,
  RecordSource,
  Store,
} from 'relay-runtime';

installRelayDevTools();

const fetchQuery = (
  operation,
  variables,
  cacheConfig,
  uploadables,
) => {
  return fetch( '/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    } ),
  } ).then( response => {
    return response.json();
  } );
};

const network = Network.create( fetchQuery );
const source = new RecordSource();
const store = new Store( source );

const environment = new Environment( {
  network,
  store,
} );

export default environment;
