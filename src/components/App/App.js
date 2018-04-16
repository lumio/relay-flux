import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'common/relayEnvironment';
import AppStyles from './styles';
import StoryList from 'components/StoryList';
import StoryView from 'components/StoryView';

const query = graphql`
  query AppQuery {
    stories {
      id
      ...StoryLink_story
    }
  }
`;

class App extends React.PureComponent {
  constructor( props ) {
    super( props );

    this.state = {
      selectedStory: null,
    };
  }

  selectStory = ( selectedStory ) => {
    this.setState( { selectedStory } );
  }

  renderApp( props ) {
    return (
      <AppStyles>
        <StoryList
          onSelect={ this.selectStory }
          stories={ props.stories }
          selectedStory={ this.state.selectedStory }
        />
        <StoryView storyId={ this.state.selectedStory } />
      </AppStyles>
    );
  }

  render() {
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
            return this.renderApp( props );
          }

          return <div>loading...</div>;
        } }
      />
    );
  }
}

export { App };
