import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'common/relayEnvironment';
import StoryList from 'components//StoryList';

const query = graphql`
  query AppQuery {
    stories {
      id
      ...Story_story
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
          return <StoryList stories={ props.stories } />;
        }

        return <div>loading...</div>;
      } }
    />
  );
};

export { App };
