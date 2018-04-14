import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { updateStoryReadState } from 'handlers/StoryHandler';
import StoryStyles from './styles';
import {
  onSelectGen,
} from './helpers';

const renderReadCheckbox = ( props ) => {
  if ( !process.env.SHOW_WITHOUT_READ_STATUS ) {
    return null;
  }

  return (
    <React.Fragment>
      <input
        type='checkbox'
        checked={ props.story.read || false }
        onChange={ () => updateStoryReadState( props.story.id, !props.story.read ) }
      />
      &nbsp;
    </React.Fragment>
  )
};

const _Story = ( props ) => (
  <StoryStyles>
    { renderReadCheckbox( props ) }
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
