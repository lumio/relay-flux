import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'common/relayEnvironment';
import ReactMarkdown from 'react-markdown';

const renderReadStatus = ( story ) => {
  if ( !process.env.SHOW_WITHOUT_READ_STATUS ) {
    return null;
  }

  if ( story.read ) {
    return <strong>You have already read { story.title }</strong>;
  }

  return <span>Not read yet</span>;
}

const query = graphql`
  query StoryViewQuery( $id: ID! ) {
    story( id: $id ) {
      id
      title
      content
      read
    }
  }
`;

class StoryView extends React.PureComponent {
  renderStory = ( storyProps ) => {
    const { story } = storyProps;
    return (
      <article>
        { renderReadStatus( story ) }
        <ReactMarkdown source={ story.content } />
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