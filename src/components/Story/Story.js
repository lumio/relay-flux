import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Checkbox from 'common/Checkbox';
import storyPropTypes from './types';
import { updateStoryReadState } from 'handlers/StoryHandler';
import StoryStyles, { StoryLinkStyled } from './styles';
import {
  onSelectGen,
} from './helpers';

const renderReadCheckbox = ( props ) => {
  if ( process.env.SHOW_WITHOUT_READ_STATUS ) {
    return null;
  }

  return (
    <React.Fragment>
      <Checkbox
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
    <StoryLinkStyled
      onClick={ onSelectGen( props.story.id, props ) }
      isSelected={ props.selectedStory === props.story.id }
    >
      { props.story.title }
    </StoryLinkStyled>
  </StoryStyles>
);

_Story.propTypes = {
  story: storyPropTypes,
};

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
