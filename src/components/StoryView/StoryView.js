import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'common/relayEnvironment';

const query = graphql`
  query StoryViewQuery( $id: ID! ) {
    story( id: $id ) {
      id
      title
      content
    }
  }
`;

class StoryView extends React.PureComponent {
  renderStory = ( storyProps ) => {
    const { story } = storyProps;
    return (
      <article>
        <pre>
          { story.content }
        </pre>
      </article>
    );
  }

  render() {
    if ( !this.props.storyId ) {
      return null;
    }

    return (
      <div>
        <QueryRenderer
          environment={ environment }
          query={ query }
          variables={ {
            id: this.props.storyId,
          } }
          render={ ( { error, props } ) => {
            if ( error ) {
              console.error( error );
              return <pre>{ JSON.stringify( error, null, 2 ) }</pre>;
            }

            if ( props ) {
              return this.renderStory( props );
            }

            return <div>loading...</div>;
          } }
        />
      </div>
    );
  }
}

export { StoryView };