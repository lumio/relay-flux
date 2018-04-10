import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import StoryStyles from './styles';
import {
  updateStoryReadState,
  onSelectGen,
} from './helpers';

const _Story = ( props ) => (
  <StoryStyles>
    <input
      type='checkbox'
      checked={ props.story.read || false }
      onChange={ () => updateStoryReadState( props.story.id, !props.story.read ) }
    />
    &nbsp;
    <a onClick={ onSelectGen( props.story.id, props ) }>{ props.story.title }</a>
  </StoryStyles>
);

const Story = createFragmentContainer(
  _Story,
  graphql`
    fragment Story_story on Story {
      id
      title
      read
    }
  `
);

export { Story };
