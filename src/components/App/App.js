import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../common/relayEnvironment';

const query = graphql`
  query AppQuery {
    stories {
      id
      title
    }
  }
`;

const App = () => {
  return (
    <QueryRenderer
      environment={ environment }
      query={ query }
      variables={ {} }
      render={ ( { error, props } ) => {
        if ( error ) {
          console.error( error );
          return <pre>{ JSON.stringify( error, null, 2 ) }</pre>;
        }

        if ( props ) {
          return (
            <ul>
              { props.stories.map( story => (
                <li key={ story.id }>
                  { story.title }
                </li>
              ) ) }
            </ul>
          );
        }

        return <div>loading...</div>;
      } }
    />
  );
};

export { App };
